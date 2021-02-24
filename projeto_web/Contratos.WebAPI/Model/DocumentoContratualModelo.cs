namespace Contratos.WebAPI.Model
{
    public class DocumentoContratualModelo
    {
        public int ContratoID { get; set; }
        public string DataInicioVigencia { get; set; }
        public string DataFimVigencia { get; set; }
        public string ProcessoTCE { get; set; }
        public string LinkRedmine { get; set; }
        public string ObjetoAcordo { get; set; }     
    }
}