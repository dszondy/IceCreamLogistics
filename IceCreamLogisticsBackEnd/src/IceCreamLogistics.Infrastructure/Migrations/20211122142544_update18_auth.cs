using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update18_auth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AuthInfos",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Salt",
                value: "asd123");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AuthInfos",
                keyColumn: "UserId",
                keyValue: 1,
                column: "Salt",
                value: null);
        }
    }
}
