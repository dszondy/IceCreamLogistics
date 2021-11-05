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

        public async Task<Recipe> Create(Recipe recipe)
        {
            var recipeDbo = DboMappingProvider.Mapper
                .From(recipe)
                .AdaptToType<RecipeDbo>();
            
            await DbContext.Recipes.AddAsync(recipeDbo);
            await DbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(recipeDbo)
                .AdaptToType<Recipe>();
        }

        public async Task<Recipe> Update(Recipe recipe)
        {
            
            var recipeDbo = DboMappingProvider.Mapper
                .From(recipe)
                .AdaptTo<RecipeDbo>(await DbContext.Recipes.
                    FirstAsync(x => x.Id == recipe.Id));
            
            await DbContext.SaveChangesAsync();
            
            return DboMappingProvider.Mapper
                .From(recipeDbo)
                .AdaptToType<Recipe>();        }
    }
}