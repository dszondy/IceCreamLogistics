using System.Security.Claims;
using IceCreamLogistics.Domain;
using IceCreamLogistics.Domain.Security;
using IceCreamLogistics.Infrastructure.DAL.DBOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace IceCreamLogistics.Infrastructure.DAL
{
    internal class IceCreamLogisticsDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public IceCreamLogisticsDbContext(IConfiguration configuration) : base()
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }
        
        public DbSet<BasicAuthInfoDbo> AuthInfos { get; set; }
        public DbSet<UserDbo> Users { get; set; }
        public DbSet<RoleDbo> Roles { get; set; }
        public DbSet<RecipeDbo> Recipes { get; set; }
        public  DbSet<OrderDbo>  Orders { get; set; }
        public  DbSet<OrderItemDbo>  OrderItems { get; set; }
        public  DbSet<MixingBatchDbo>  MixingBatches { get; set; }
        public  DbSet<MixingMemberDbo>  MixingBatchMembers { get; set; }
        public  DbSet<ClientDbo>  Clients { get; set; }
        public DbSet<AddressDbo> Addresses { get; set; }
        public DbSet<MixingItemDbo> MixingItems { get; set; }
        
        public DbSet<RecipeIngredientDbo> RecipeIngredients { get; set; }
        public DbSet<IngredientDbo> Ingredients { get; set; }
        public DbSet<InventoryChangeDbo> InventoryChanges { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(Configuration.GetValue<string>(Infrastructure.Configuration.ConnectionStringKey));       
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder
                .Entity<RoleDbo>()
                .HasKey(x =>
                new {
                    UserId = x.UserId,
                    Role = x.Role,
                });
            
            modelBuilder.Entity<UserDbo>()
                .HasMany(x => x.Roles)
                .WithOne()
                .HasForeignKey(x => x.UserId);
            
            modelBuilder.Entity<UserDbo>()
                .HasOne(x => x.BasicAuthInfo)
                .WithOne()
                .HasForeignKey<BasicAuthInfoDbo>(x => x.UserId);

            modelBuilder.Entity<OrderItemDbo>()
                .HasOne(x => x.Recipe)
                .WithMany()
                .HasForeignKey(x=> x.RecipeId);

            modelBuilder.Entity<AddressDbo>();

            modelBuilder.Entity<ClientDbo>()
                .HasOne(x => x.Address)
                .WithOne()
                .HasForeignKey<ClientDbo>(x => x.AddressId);
            
            modelBuilder.Entity<OrderDbo>()
                .HasMany(x => x.Items)
                .WithOne()
                .HasForeignKey(x => x.OrderId);

            modelBuilder.Entity<OrderDbo>()
                .HasOne(x => x.Client)
                .WithMany()
                .HasForeignKey(x => x.ClientId);

            modelBuilder.Entity<MixingMemberDbo>()
                .HasOne(x => x.Order)
                .WithMany()
                .HasForeignKey(x => x.OrderId);
            
            modelBuilder.Entity<MixingMemberDbo>()
                .HasMany(x => x.Items)
                .WithOne()
                .HasForeignKey(x => x.MixingMemberId);

            modelBuilder.Entity<MixingBatchDbo>()
                .HasMany(x => x.Members)
                .WithOne()
                .HasForeignKey(x => x.MixingBatchId);

            modelBuilder.Entity<RecipeDbo>()
                .HasMany(x => x.Ingredients)
                .WithOne()
                .HasForeignKey(x => x.RecipeId);

            modelBuilder.Entity<RecipeIngredientDbo>()
                .HasOne(x => x.Ingredient)
                .WithMany()
                .HasForeignKey(x => x.IngredientId);
            
            modelBuilder.Entity<IngredientDbo>()
                .HasMany<InventoryChangeDbo>()
                .WithOne()
                .HasForeignKey(x => x.IngredientId);
            
        }
    }
}