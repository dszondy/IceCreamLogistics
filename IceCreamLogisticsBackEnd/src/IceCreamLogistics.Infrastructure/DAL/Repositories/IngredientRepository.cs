using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;

namespace IceCreamLogistics.Infrastructure.DAL.Repositories
{
    internal class IngredientRepository : IIngredientRepository
    {
        public IngredientRepository(IceCreamLogisticsDbContext dbContext)
        {
            DbContext = dbContext;
        }

        private IceCreamLogisticsDbContext DbContext { get; }

        public async Task<IEnumerable<Ingredient>>  GetIngredientsBySearch(string text, LazyLoadingParams loadingParams)
        {
            return DbContext.Ingredients
                    .Where(x => x.Name.StartsWith(text))
                    .OrderBy(x => x.Name)
                .ApplyLazyLoading(loadingParams)
                .ToArray()
                .Select(x => x.MapTo<Ingredient>());
        }



        public async Task<Ingredient> Create(IngredientCreate ingredientCreate)
        {
            var ingredientDbo = ingredientCreate.MapTo<IngredientDbo>();
            
            await DbContext.Ingredients.AddAsync(ingredientDbo);
            await DbContext.SaveChangesAsync();
            
            return ingredientDbo.MapTo<Ingredient>();
        }

        public async Task<Ingredient> Update(IngredientCreate ingredientCreate)
        {
            
            var ingredientDbo = DboMappingProvider.Mapper
                .From(ingredientCreate)
                .AdaptTo<IngredientDbo>(await DbContext.Ingredients.
                    FirstAsync(x => x.Id == ingredientCreate.Id));
            
            await DbContext.SaveChangesAsync();
            
            return ingredientDbo.MapTo<Ingredient>();
        }

        public async Task<IEnumerable<Ingredient>> GetMany(IEnumerable<int> ids)
        {
            var results = DbContext.Ingredients
                .Where(x => ids.Contains(x.Id))
                .AsEnumerable();

            return results.Select(x => x.MapTo<Ingredient>());
        }
    }
}