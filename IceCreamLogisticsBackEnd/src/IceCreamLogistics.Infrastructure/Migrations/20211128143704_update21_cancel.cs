using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update21_cancel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CancelledMixingAmount",
                table: "OrderItems");

            migrationBuilder.CreateTable(
                name: "OrderItemCancellationDbo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OrderItemId = table.Column<int>(type: "integer", nullable: false),
                    Amount = table.Column<decimal>(type: "numeric", nullable: false),
                    OrderItemDboId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItemCancellationDbo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItemCancellationDbo_OrderItems_OrderItemDboId",
                        column: x => x.OrderItemDboId,
                        principalTable: "OrderItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItemCancellationDbo_OrderItemDboId",
                table: "OrderItemCancellationDbo",
                column: "OrderItemDboId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderItemCancellationDbo");

            migrationBuilder.AddColumn<decimal>(
                name: "CancelledMixingAmount",
                table: "OrderItems",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
