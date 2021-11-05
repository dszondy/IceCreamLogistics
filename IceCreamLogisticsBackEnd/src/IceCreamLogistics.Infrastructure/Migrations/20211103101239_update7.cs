using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IncompleteOrderId",
                table: "OrderItems",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_IncompleteOrderId",
                table: "OrderItems",
                column: "IncompleteOrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Orders_IncompleteOrderId",
                table: "OrderItems",
                column: "IncompleteOrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Orders_IncompleteOrderId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_IncompleteOrderId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "IncompleteOrderId",
                table: "OrderItems");
        }
    }
}
