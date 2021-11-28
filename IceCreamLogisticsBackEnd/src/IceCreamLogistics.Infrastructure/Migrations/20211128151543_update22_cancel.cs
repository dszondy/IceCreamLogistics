using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update22_cancel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItemCancellationDbo_OrderItems_OrderItemDboId",
                table: "OrderItemCancellationDbo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderItemCancellationDbo",
                table: "OrderItemCancellationDbo");

            migrationBuilder.DropIndex(
                name: "IX_OrderItemCancellationDbo_OrderItemDboId",
                table: "OrderItemCancellationDbo");

            migrationBuilder.DropColumn(
                name: "OrderItemDboId",
                table: "OrderItemCancellationDbo");

            migrationBuilder.RenameTable(
                name: "OrderItemCancellationDbo",
                newName: "OrderItemCancellations");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderItemCancellations",
                table: "OrderItemCancellations",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItemCancellations_OrderItemId",
                table: "OrderItemCancellations",
                column: "OrderItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItemCancellations_OrderItems_OrderItemId",
                table: "OrderItemCancellations",
                column: "OrderItemId",
                principalTable: "OrderItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItemCancellations_OrderItems_OrderItemId",
                table: "OrderItemCancellations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderItemCancellations",
                table: "OrderItemCancellations");

            migrationBuilder.DropIndex(
                name: "IX_OrderItemCancellations_OrderItemId",
                table: "OrderItemCancellations");

            migrationBuilder.RenameTable(
                name: "OrderItemCancellations",
                newName: "OrderItemCancellationDbo");

            migrationBuilder.AddColumn<int>(
                name: "OrderItemDboId",
                table: "OrderItemCancellationDbo",
                type: "integer",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderItemCancellationDbo",
                table: "OrderItemCancellationDbo",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItemCancellationDbo_OrderItemDboId",
                table: "OrderItemCancellationDbo",
                column: "OrderItemDboId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItemCancellationDbo_OrderItems_OrderItemDboId",
                table: "OrderItemCancellationDbo",
                column: "OrderItemDboId",
                principalTable: "OrderItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
