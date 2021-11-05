﻿using IceCreamLogistics.Application.Manufacturing;
using IceCreamLogistics.Application.Security;
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
            services.AddTransient<IMixingBatchService, MixingBatchService>();

        }

    }
}