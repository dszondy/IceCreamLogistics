using System.Security.Claims;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Mapster;
using MapsterMapper;

namespace IceCreamLogistics.Infrastructure.DAL
{
    public static class DboMappingProvider
    {
        public static TOut MapTo<TOut>(this object obj)
        {
            return DboMappingProvider.Mapper
                .From(obj)
                .AdaptToType<TOut>();
        }
        
        public static readonly TypeAdapterConfig AdapterConfig = GetAdapterConfig();
        public static readonly IMapper Mapper = new Mapper(GetAdapterConfig());
        private static TypeAdapterConfig GetAdapterConfig()
        {
            var config = new TypeAdapterConfig();
            config.NewConfig<RoleDbo, Role>()
                .MapWith(x => x.Role);
            config.NewConfig<Role, RoleDbo>()
                .MapWith(x => new RoleDbo(){Role = x});
            
            config.NewConfig<UserDbo, User>();
            config.NewConfig<User, UserDbo>();
            
            config.NewConfig<BasicAuthInfoDbo, BasicAuthInfo>();
            config.NewConfig<BasicAuthInfo, BasicAuthInfoDbo>();
            
            config.NewConfig<RecipeDbo, Recipe>();
            config.NewConfig<Recipe, RecipeDbo>();
            
            config.NewConfig<OrderDbo, Order>();
            config.NewConfig<Order, OrderDbo>();
            
            config.NewConfig<OrderItemDbo, OrderItem>();
            config.NewConfig<OrderItem, OrderItemDbo>().MapWith(x => new OrderItemDbo() {
                    Amount = x.Amount, 
                    RecipeId = x.Recipe.Id
            });
            
            config.NewConfig<ClientDbo, Client>();
            config.NewConfig<Client, ClientDbo>();
            
            config.NewConfig<AddressDbo, Address>();
            config.NewConfig<Address, AddressDbo>();
            return config;
        }
    }
}