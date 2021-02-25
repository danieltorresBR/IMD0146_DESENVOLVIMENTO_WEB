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
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Autoincrement", true),
                    DataInicioVigencia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataFimVigencia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProcessoTCE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LinkRedmine = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ObjetoAcordo = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
