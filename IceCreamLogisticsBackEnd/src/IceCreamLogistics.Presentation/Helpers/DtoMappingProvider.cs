using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Security.Claims;
using IceCreamLogistics.Application;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using IceCreamLogistics.Presentation.Controllers;
using IceCreamLogistics.Presentation.DTOs;
using Mapster;
using MapsterMapper;

namespace IceCreamLogistics.Presentation
{
    public static class DtoMappingProvider
    {
        public static readonly TypeAdapterConfig AdapterConfig = GetAdapterConfig();
        public static readonly IMapper Mapper = new Mapper(GetAdapterConfig());
        public static LazyLoadingResponse<T> ToLazyLoadingResponse<T>(this IEnumerable<T> data, LazyLoadingParamsDto lazyLoadingParams)
        {
            var content = data.Take(lazyLoadingParams.Count);

            return new LazyLoadingResponse<T>()
            {
                Content = content,
                Count = content.Count(),
                HasMore = data.Count() > lazyLoadingParams.Count,
                Offset = lazyLoadingParams.Offset,
                NextOffset = lazyLoadingParams.Offset + data.Count()
            };
        }

        public static TOut MapTo<TOut>(this object obj)
        {
            return DtoMappingProvider.Mapper
                .From(obj)
                .AdaptToType<TOut>();
        }
        

        private static TypeAdapterConfig GetAdapterConfig()
        {
            var config = new TypeAdapterConfig();
            config.NewConfig<LazyLoadingParamsDto, LazyLoadingParams>()
                .MapWith(x => new LazyLoadingParams()
                {
                    Offset = x.Offset,
                    Count = x.Count + 1
                });

            config.NewConfig<Recipe, RecipeDto>();
            config.NewConfig<RecipeDto, Recipe>();

            config.NewConfig<OrderCreateItemDto, OrderItem>()
                .AfterMapping((dto, item) => item.Recipe = new Recipe() { Id = dto.RecipeId });
            config.NewConfig<OrderCreateDto, Order>()
                .AfterMapping((dto, order) => order.Client = new Client() { Id = dto.ClientId });
            
            return config;
            
            
        }
    }
}