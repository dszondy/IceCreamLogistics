using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IceCreamLogistics.Infrastructure.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Microsoft.VisualBasic;
using NSwag;
using NSwag.Generation.Processors.Security;
using OpenApiSecurityScheme = NSwag.OpenApiSecurityScheme;

namespace IceCreamLogistics.Presentation
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)    
                .AddJwtBearer(options =>    
                {    
                    options.TokenValidationParameters = new TokenValidationParameters    
                    {    
                        ValidateIssuer = false,    
                        ValidateAudience = false,    
                        ValidateLifetime = true,    
                        ValidateIssuerSigningKey = false,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))    
                    };    
                });

            services.AddCors();
            var policy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();
            services.AddAuthorization(options => options.DefaultPolicy = policy);

            services.AddControllers(options => options.Filters.Add(new AuthorizeFilter(policy)));

            // Register the Swagger services
            services.AddSwaggerDocument(doc =>
            {
                doc.AddSecurity(
                    "bearer", new OpenApiSecurityScheme()
                    {
                        Type = OpenApiSecuritySchemeType.ApiKey,
                        Name = "Authorization",
                        In = OpenApiSecurityApiKeyLocation.Header,
                        Description = "Type into the textbox: Bearer {your JWT token}."
                    });
                doc.OperationProcessors.Add(
                    new AspNetCoreOperationSecurityScopeProcessor("bearer"));
            });

            Application.Startup.ConfigureServices(services);
            Infrastructure.Startup.ConfigureServices(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            Infrastructure.Startup.Configure(app, env);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseCors(options => options
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyHeader());
            app.UseRouting();
            
            app.UseAuthentication();

            app.UseOpenApi();
            app.UseSwaggerUi3();
            
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}