using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Orders_OrderId",
                table: "OrderItems");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderItems",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "MixingBatchMemberId",
                table: "OrderItems",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MixingBatchMembers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OrderId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MixingBatchMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MixingBatchMembers_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_MixingBatchMemberId",
                table: "OrderItems",
                column: "MixingBatchMemberId");

            migrationBuilder.CreateIndex(
                name: "IX_MixingBatchMembers_OrderId",
                table: "MixingBatchMembers",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_MixingBatchMembers_MixingBatchMemberId",
                table: "OrderItems",
                column: "MixingBatchMemberId",
                principalTable: "MixingBatchMembers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Orders_OrderId",
                table: "OrderItems",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_MixingBatchMembers_MixingBatchMemberId",
                table: "OrderItems");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Orders_OrderId",
                table: "OrderItems");

            migrationBuilder.DropTable(
                name: "MixingBatchMembers");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_MixingBatchMemberId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "MixingBatchMemberId",
                table: "OrderItems");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderItems",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Orders_OrderId",
                table: "OrderItems",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
