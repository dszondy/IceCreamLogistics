using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class RecipeRepository : IRecipeRepository
    {
        public RecipeRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }

        public async Task<IEnumerable<Recipe>>  GetRecipesBySearch(string text, LazyLoadingParams loadingParams)
        {
            return DbContext.Recipes
                    .Where(x => x.Name.StartsWith(text))
                    .Where(x => x.CanBeOrdered)
                    .OrderBy(x => x.Name)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => DboMappingProvider.Mapper
                    .From(x)
                    .AdaptToType<Recipe>());
        }

        public async Task<RecipeDetails> Get(int id)
        {
            var result = await DbContext.Recipes
                .Include(x => x.Ingredients)
                .ThenInclude(x => x.Ingredient)
                .FirstAsync(x => x.Id == id);
            return result.MapTo<RecipeDetails>();
        }

        public  async Task<IEnumerable<RecipeDetails>> GetMany(IEnumerable<int> ids)
        {
            var results = DbContext.Recipes
                .Include(x => x.Ingredients)
                .ThenInclude(x => x.Ingredient)
                .Where(x => ids.Contains(x.Id))
                .AsEnumerable();
            
            return results.Select(x => x.MapTo<RecipeDetails>());
        }

        public async Task<Recipe> Create(RecipeCreate recipe)
        {
            var recipeDbo = DboMappingProvider.Mapper
                .From(recipe)
                .AdaptToType<RecipeDbo>();

            await DbContext.Recipes.AddAsync(recipeDbo);
            await DbContext.SaveChangesAsync();

            await DbContext.RecipeIngredients.AddRangeAsync(
                recipe.Ingredients.Select(x => new RecipeIngredientDbo()
                {
                    RecipeId = recipeDbo.Id,
                    IngredientId = x.IngredientId,
                    Amount = x.Amount
                }));
            await DbContext.SaveChangesAsync();


            return DboMappingProvider.Mapper
                .From(recipeDbo)
                .AdaptToType<Recipe>();
        }
        
        public async Task<Recipe> Update(RecipeCreate recipe)
        {
            
            DbContext.RecipeIngredients.RemoveRange(DbContext.RecipeIngredients
                .Where(x => x.RecipeId == recipe.Id));
            
            var recipeDbo = DboMappingProvider.Mapper
                .From(recipe)
                .AdaptTo<RecipeDbo>(await DbContext.Recipes.
                    FirstAsync(x => x.Id == recipe.Id));

            await DbContext.SaveChangesAsync();
            
            
            await DbContext.RecipeIngredients.AddRangeAsync(
                recipe.Ingredients.Select(x => new RecipeIngredientDbo()
                {
                    RecipeId = recipeDbo.Id,
                    IngredientId = x.IngredientId,
                    Amount = x.Amount
                }));
            await DbContext.SaveChangesAsync();

            return DboMappingProvider.Mapper
                .From(recipeDbo)
                .AdaptToType<Recipe>();
        }
    }
}