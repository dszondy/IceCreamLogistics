using System.Linq;
using IceCreamLogistics.Application;

namespace IceCreamLogistics.Infrastructure.DAL
{
    internal static class QueryHelpers
    {
        internal static IQueryable<T> ApplyLazyLoading<T>(this IQueryable<T> queryable,
            LazyLoadingParams lazyLoadingParams)
        {
            return queryable
                .Skip(lazyLoadingParams.Offset)
                .Take(lazyLoadingParams.Count + 1);
        }
    }
}