using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "OrderItems",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<int>(
                name: "MixingBatchId",
                table: "MixingBatchMembers",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "MixingBatches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MixingBatches", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MixingBatchMembers_MixingBatchId",
                table: "MixingBatchMembers",
                column: "MixingBatchId");

            migrationBuilder.AddForeignKey(
                name: "FK_MixingBatchMembers_MixingBatches_MixingBatchId",
                table: "MixingBatchMembers",
                column: "MixingBatchId",
                principalTable: "MixingBatches",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MixingBatchMembers_MixingBatches_MixingBatchId",
                table: "MixingBatchMembers");

            migrationBuilder.DropTable(
                name: "MixingBatches");

            migrationBuilder.DropIndex(
                name: "IX_MixingBatchMembers_MixingBatchId",
                table: "MixingBatchMembers");

            migrationBuilder.DropColumn(
                name: "MixingBatchId",
                table: "MixingBatchMembers");

            migrationBuilder.AlterColumn<int>(
                name: "Amount",
                table: "OrderItems",
                type: "integer",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");
        }
    }
}
