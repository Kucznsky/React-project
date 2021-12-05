namespace Backend.Models
{
    public class Film
    {
        public int ID { get; set; }
        public string Title { get; set; }
        // In minutes.
        public int ScreeningTime { get; set; }
    }
}