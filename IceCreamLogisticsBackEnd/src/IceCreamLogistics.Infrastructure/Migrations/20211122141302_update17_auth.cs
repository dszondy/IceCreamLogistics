using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update17_auth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsActive", "Name" },
                values: new object[] { 1, "admin", true, "admin" });

            migrationBuilder.InsertData(
                table: "AuthInfos",
                columns: new[] { "UserId", "PasswordHash", "Salt" },
                values: new object[] { 1, "pZXky3qeBxGB/rvCAJ2JyS+hNUUoJEk/RGj/yTSJFlA9vj0SMEDimtg6TL4hjA9ErQoi+7liPxlwATXFNBYZtg==", null });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Role", "UserId" },
                values: new object[] { 0, 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AuthInfos",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 0, 1 });

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
