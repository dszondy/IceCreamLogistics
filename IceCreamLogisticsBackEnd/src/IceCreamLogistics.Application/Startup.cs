using IceCreamLogistics.Application.Delivery;
using IceCreamLogistics.Application.Manufacturing;
using IceCreamLogistics.Application.Mixing;
using IceCreamLogistics.Application.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace IceCreamLogistics.Application
{
    public static class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IRecipeService, RecipeService>();
            services.AddTransient<IOrderService, OrderService>();
            services.AddTransient<IClientService, ClientService>();
            services.AddTransient<IMixingService, MixingService>();
            services.AddTransient<IIngredientService, IngredientService>();
            services.AddTransient<IMixingInventoryCheckService, MixingInventoryCheckService>();
            services.AddHttpContextAccessor();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IDeliveryService, DeliveryService>();
            services.AddTransient<IInventoryService, InventoryService>();
            services.AddTransient<IDashboardService, DashboardService>();
        }

    }
}