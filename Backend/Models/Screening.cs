using System.Collections.Generic;

namespace Backend.Models
{
    public class Screening
    {
        public int ID { get; set; }
        public int FilmID { get; set; }
        public int RoomID { get; set; }
        public int SoldTickets { get; set; }
        // public ICollection<int> TakenSeats { get; set; }
    }
}