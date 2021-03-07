namespace ProConvenios.API.Models
{
    public class Convenio
    {
        public int ConvenioId { get; set; }
        public string DtInicio { get; set; }
        public string DtFim { get; set; }
        public string ProcessoTCE { get; set; }
        public string LinkRedmine { get; set; }
        public string ObjetoAcordo { get; set; } 
    }
}