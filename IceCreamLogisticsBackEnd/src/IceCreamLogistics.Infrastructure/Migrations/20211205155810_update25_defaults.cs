using Microsoft.EntityFrameworkCore.Migrations;

namespace IceCreamLogistics.Infrastructure.Migrations
{
    public partial class update25_defaults : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Role", "UserId" },
                values: new object[,]
                {
                    { 5, 1 },
                    { 4, 1 },
                    { 3, 1 },
                    { 1, 1 },
                    { 2, 1 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 3, 1 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 4, 1 });

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumns: new[] { "Role", "UserId" },
                keyValues: new object[] { 5, 1 });
        }
    }
}
