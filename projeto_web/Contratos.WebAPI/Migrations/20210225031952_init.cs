using Microsoft.EntityFrameworkCore.Migrations;

namespace Contratos.WebAPI.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DocumentosContratuais",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DataInicioVigencia = table.Column<string>(type: "TEXT", nullable: true),
                    DataFimVigencia = table.Column<string>(type: "TEXT", nullable: true),
                    ProcessoTCE = table.Column<string>(type: "TEXT", nullable: true),
                    LinkRedmine = table.Column<string>(type: "TEXT", nullable: true),
                    ObjetoAcordo = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DocumentosContratuais", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DocumentosContratuais");
        }
    }
}
