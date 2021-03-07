using Microsoft.EntityFrameworkCore.Migrations;

namespace ProConvenios.API.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Convenios",
                columns: table => new
                {
                    ConvenioId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DtInicio = table.Column<string>(type: "TEXT", nullable: true),
                    DtFim = table.Column<string>(type: "TEXT", nullable: true),
                    ProcessoTCE = table.Column<string>(type: "TEXT", nullable: true),
                    LinkRedmine = table.Column<string>(type: "TEXT", nullable: true),
                    ObjetoAcordo = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Convenios", x => x.ConvenioId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Convenios");
        }
    }
}
