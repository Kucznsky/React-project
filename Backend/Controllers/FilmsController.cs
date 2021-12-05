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
    public class FilmsController : ControllerBase
    {
        private readonly ILogger<FilmsController> _logger;
        private readonly AppDBContext _context;

        public FilmsController(ILogger<FilmsController> logger, AppDBContext context)
            => (_logger, _context) = (logger, context);

        [HttpGet]
        public IEnumerable<Film> GetAll()
        {
            // throw new NotImplementedException();
            return _context.Films;
            // return _context.Films.
        }
        [HttpPost("/DEBUG")]
        public void PostDebug()
        {
            _context.Films.Add(new Film { Title= "DEBUG", ScreeningTime= 1337 });
        }
    }
}
