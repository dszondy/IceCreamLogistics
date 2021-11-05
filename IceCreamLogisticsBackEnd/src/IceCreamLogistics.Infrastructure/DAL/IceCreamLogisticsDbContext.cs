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
        public  DbSet<MixingBatchMemberDbo>  MixingBatchMembers { get; set; }
        public  DbSet<ClientDbo>  Clients { get; set; }
        public DbSet<AddressDbo> Addresses { get; set; }

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
                .HasMany(x => x.IncompleteItems)
                .WithOne()
                .HasForeignKey(x => x.IncompleteOrderId);
            
            modelBuilder.Entity<OrderDbo>()
                .HasOne(x => x.Client)
                .WithMany()
                .HasForeignKey(x => x.ClientId);

            modelBuilder.Entity<MixingBatchMemberDbo>()
                .HasOne(x => x.Order)
                .WithMany()
                .HasForeignKey(x => x.OrderId);
            
            modelBuilder.Entity<MixingBatchMemberDbo>()
                .HasMany(x => x.Items)
                .WithOne()
                .HasForeignKey(x => x.MixingBatchMemberId);

            modelBuilder.Entity<MixingBatchDbo>()
                .HasMany(x => x.Members)
                .WithOne()
                .HasForeignKey(x => x.MixingBatchId);
            
            modelBuilder.Entity<Recipe>();
        }
    }
}