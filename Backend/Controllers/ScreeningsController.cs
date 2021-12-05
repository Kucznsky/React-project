using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScreeningsController : ControllerBase
    {
        private readonly ILogger<ScreeningsController> _logger;
        private readonly AppDBContext _context;

        public ScreeningsController(ILogger<ScreeningsController> logger, AppDBContext context)
            => (_logger, _context) = (logger, context);

        [HttpGet]
        public IEnumerable<Screening> GetAll()
        {
            return _context.Screenings;
        }
        [HttpGet("/Screening/{index}")]
        public Screening Get(int index)
        {
            return _context.Screenings.Find(index);
        }
        [HttpGet("/FilmScreenings/{filmID}")]
        public IEnumerable<Screening> GetFilmScreenings(int filmID)
        {
            return _context.Screenings
                    .Where(screening => screening.FilmID == filmID);
        }

        [HttpPost]
        public ActionResult AddRange([FromBody] IEnumerable<Screening> screenings)
        {
            if (screenings is null || screenings.Any() is false)
                return BadRequest(new ArgumentNullException("There was no screenings provided to add to database."));
            
            // Filter invalid screenings.
            var screenings_filtered = screenings.Where(item =>
                            _context.Rooms.Find(item.RoomID) is not null
                            && _context.Films.Find(item.FilmID) is not null);
            
            _context.AddRange(screenings_filtered);
            _context.SaveChanges();

            return Ok($"Added {screenings_filtered.Count()} out of {screenings.Count()} screenings.");
        }

        [HttpPut]
        public ActionResult Update([FromBody] Screening screening)
        {
            if (screening is null)
                return BadRequest(new ArgumentNullException("There is no screening provided to update."));

            var screeningToUpdate = _context.Screenings.Find(screening.ID);
            if (screeningToUpdate is null)
                return NotFound(new NullReferenceException($"There is no screening with provided id: {screening.ID}"));
            if (_context.Films.Find(screening.FilmID) is null)
                return NotFound(new NullReferenceException($"There is no film with provided id: {screening.FilmID}"));
            if (_context.Rooms.Find(screening.RoomID) is null)
                return NotFound(new NullReferenceException($"There is no room with provided id: {screening.RoomID}"));

            screeningToUpdate.FilmID = screening.FilmID;
            screeningToUpdate.RoomID = screening.RoomID;
            _context.SaveChanges();
            
            return Ok();
        }
    }
}
