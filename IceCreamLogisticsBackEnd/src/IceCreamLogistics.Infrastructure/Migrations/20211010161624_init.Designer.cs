// <auto-generated />
using IceCreamLogistics.Infrastructure.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    [DbContext(typeof(IceCreamLogisticsDbContext))]
    [Migration("20211010161624_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

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

            modelBuilder.Entity("IceCreamLogistics.Infrastructure.RoleDbo", b =>
                {
                    b.HasOne("IceCreamLogistics.Infrastructure.DAL.DBOs.UserDbo", null)
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
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
