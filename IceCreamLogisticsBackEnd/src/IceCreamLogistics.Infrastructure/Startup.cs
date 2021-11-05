using IceCreamLogistics.Application;
using IceCreamLogistics.Application.Security;
using IceCreamLogistics.Infrastructure.DAL;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using IceCreamLogistics.Infrastructure.DAL.Repositories;
using IceCreamLogistics.Infrastructure.Security;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IceCreamLogistics.Infrastructure
{
    public static class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
                
            services.AddTransient<IAuthRepository, AuthRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IRecipeRepository, RecipeRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<IClientRepository, ClientRepository>();
            services.AddTransient<IOrderPartRepository, OrderPartRepository>();
            services.AddTransient<IMixingBatchesRepository, MixingBatchesRepository>();

            services.AddTransient<IHashingService, HashingService>();
            services.AddTransient<IUserTokenService, JwtTokenService>();

            services.AddDbContext<IceCreamLogisticsDbContext>();

        }

        public static void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {           
            using var context = new IceCreamLogisticsDbContext(app.ApplicationServices.GetService<IConfiguration>());
            context.Database.Migrate();
        }


    }
}