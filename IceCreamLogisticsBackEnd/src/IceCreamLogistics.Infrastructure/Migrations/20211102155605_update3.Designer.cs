// <auto-generated />
using System;
using IceCreamLogistics.Infrastructure.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    [DbContext(typeof(IceCreamLogisticsDbContext))]
    [Migration("20211102155605_update3")]
    partial class update3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("IceCreamLogistics.Domain.Recipe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<bool>("CanBeOrdered")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Recipe");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.AddressDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("AddressLine")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("Region")
                        .HasColumnType("text");

                    b.Property<string>("Zip")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("AddressDbo");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.BasicAuthInfoDbo", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("Salt")
                        .HasColumnType("text");

                    b.HasKey("UserId");

                    b.ToTable("AuthInfos");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.ClientDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("AddressId")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("ClientId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("OrderCreated")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("OrderState")
                        .HasColumnType("integer");

                    b.Property<DateTime>("RequestedDate")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderItemDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("Amount")
                        .HasColumnType("integer");

                    b.Property<int>("OrderId")
                        .HasColumnType("integer");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("RecipeId");

                    b.ToTable("OrderItems");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<bool>("CanBeOrdered")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Recipes");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.UserDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(127)
                        .HasColumnType("character varying(127)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.RoleDbo", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.HasKey("UserId", "Role");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.BasicAuthInfoDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.UserDbo", null)
                        .WithOne("BasicAuthInfo")
                        .HasForeignKey("IceCreamLogistics.Infrastructure.DAL.DBOs.BasicAuthInfoDbo", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.ClientDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.AddressDbo", "Address")
                        .WithMany()
                        .HasForeignKey("AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.ClientDbo", "Client")
                        .WithMany()
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderItemDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", null)
                        .WithMany("Items")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", "Recipe")
                        .WithMany()
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Recipe");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.RoleDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.UserDbo", null)
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", b =>
                {
                    b.Navigation("Items");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.UserDbo", b =>
                {
                    b.Navigation("BasicAuthInfo");

                    b.Navigation("Roles");
                });
#pragma warning restore 612, 618
        }
    }
}
