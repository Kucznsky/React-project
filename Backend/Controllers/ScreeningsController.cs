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
    }
}
