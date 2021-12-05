using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Backend.Data
{
    public class AppDBContext : DbContext
    {
        public DbSet<Film> Films { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Screening> Screenings { get; set; }

        
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Screening>()
                    .HasOne<Film>()
                    .WithMany()
                    .HasForeignKey(e => e.FilmID);
            builder.Entity<Screening>()
                    .HasOne<Room>()
                    .WithMany()
                    .HasForeignKey(e => e.RoomID);
        }
    }
}