using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update21_inventory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "QuantityPerPackage",
                table: "Ingredients",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "WarningThreshold",
                table: "Ingredients",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuantityPerPackage",
                table: "Ingredients");

            migrationBuilder.DropColumn(
                name: "WarningThreshold",
                table: "Ingredients");
        }
    }
}
