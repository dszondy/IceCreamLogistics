﻿// <auto-generated />
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
    [Migration("20211107210326_update11")]
    partial class update11
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("IceCreamLogistics.Domain.Ingredient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<decimal>("AmountOnHand")
                        .HasColumnType("numeric");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Ingredient");
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

                    b.Property<string>("Country")
                        .HasColumnType("text");

                    b.Property<string>("Region")
                        .HasColumnType("text");

                    b.Property<string>("Zip")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Addresses");
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

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AddressId")
                        .IsUnique();

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.IngredientDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<decimal>("AmountOnHand")
                        .HasColumnType("numeric");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Ingredients");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.InventoryChangeDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<decimal>("AmountLeft")
                        .HasColumnType("numeric");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime?>("ExpiresAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("IngredientId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("IngredientId");

                    b.ToTable("InventoryChanges");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingBatchDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("MixingBatches");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingItemDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<decimal>("CompletedAmount")
                        .HasColumnType("numeric");

                    b.Property<int>("MixingMemberId")
                        .HasColumnType("integer");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("MixingMemberId");

                    b.HasIndex("RecipeId");

                    b.ToTable("MixingItems");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingMemberDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("MixingBatchId")
                        .HasColumnType("integer");

                    b.Property<int>("OrderId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("MixingBatchId");

                    b.HasIndex("OrderId");

                    b.ToTable("MixingBatchMembers");
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

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<decimal>("MixedAmount")
                        .HasColumnType("numeric");

                    b.Property<int>("OrderId")
                        .HasColumnType("integer");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.Property<decimal>("SelectedMixingAmount")
                        .HasColumnType("numeric");

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

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeIngredientDbo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<decimal>("Amount")
                        .HasColumnType("numeric");

                    b.Property<int>("IngredientId")
                        .HasColumnType("integer");

                    b.Property<int>("RecipeId")
                        .HasColumnType("integer");

                    b.Property<int?>("RecipeId1")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("IngredientId");

                    b.HasIndex("RecipeId");

                    b.HasIndex("RecipeId1");

                    b.ToTable("RecipeIngredients");
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
                        .WithOne()
                        .HasForeignKey("IceCreamLogistics.Infrastructure.DAL.DBOs.ClientDbo", "AddressId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Address");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.InventoryChangeDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.IngredientDbo", null)
                        .WithMany()
                        .HasForeignKey("IngredientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingItemDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingMemberDbo", null)
                        .WithMany("Items")
                        .HasForeignKey("MixingMemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", "Recipe")
                        .WithMany()
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Recipe");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingMemberDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingBatchDbo", null)
                        .WithMany("Members")
                        .HasForeignKey("MixingBatchId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
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

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeIngredientDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Domain.Ingredient", "Ingredient")
                        .WithMany()
                        .HasForeignKey("IngredientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", null)
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", "Recipe")
                        .WithMany()
                        .HasForeignKey("RecipeId1");

                    b.Navigation("Ingredient");

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

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingBatchDbo", b =>
                {
                    b.Navigation("Members");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.MixingMemberDbo", b =>
                {
                    b.Navigation("Items");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.OrderDbo", b =>
                {
                    b.Navigation("Items");
                });

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.DAL.DBOs.RecipeDbo", b =>
                {
                    b.Navigation("Ingredients");
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
