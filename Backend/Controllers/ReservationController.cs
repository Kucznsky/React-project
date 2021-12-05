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
    public class ReservationController : ControllerBase
    {
        private readonly ILogger<ReservationController> _logger;
        private readonly AppDBContext _context;

        public ReservationController(ILogger<ReservationController> logger, AppDBContext context)
            => (_logger, _context) = (logger, context);

        /// <summary>
        /// Gets all reserved seats for given screening.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{index}")]
        public IEnumerable<short> GetAll(int index)
        {
            return _context.TakenSeats
                    .Where(seat => seat.ScreeningID == index)
                    .Select(seat => seat.SeatID);
        }
    }
}
