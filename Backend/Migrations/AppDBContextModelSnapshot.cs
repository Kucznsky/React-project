// <auto-generated />
using System;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Backend.Migrations
{
    [DbContext(typeof(AppDBContext))]
    partial class AppDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.12");

            modelBuilder.Entity("Backend.Models.Film", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsShowing")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ScreeningTime")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Films");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            IsShowing = true,
                            ScreeningTime = 156,
                            Title = "Diune"
                        },
                        new
                        {
                            ID = 2,
                            IsShowing = true,
                            ScreeningTime = 112,
                            Title = "The Intouchables"
                        },
                        new
                        {
                            ID = 3,
                            IsShowing = true,
                            ScreeningTime = 157,
                            Title = "Dom Gucci"
                        },
                        new
                        {
                            ID = 4,
                            IsShowing = true,
                            ScreeningTime = 600,
                            Title = "Motywacja"
                        });
                });

            modelBuilder.Entity("Backend.Models.Room", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Capacity")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.ToTable("Rooms");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            Capacity = 60
                        },
                        new
                        {
                            ID = 2,
                            Capacity = 150
                        });
                });

            modelBuilder.Entity("Backend.Models.Screening", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("BeginsAt")
                        .HasColumnType("TEXT");

                    b.Property<int>("FilmID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RoomID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SoldTickets")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("FilmID");

                    b.HasIndex("RoomID");

                    b.ToTable("Screenings");
                });

            modelBuilder.Entity("Backend.Models.TakenSeat", b =>
                {
                    b.Property<int>("ScreeningID")
                        .HasColumnType("INTEGER");

                    b.Property<short>("SeatID")
                        .HasColumnType("INTEGER");

                    b.HasKey("ScreeningID", "SeatID");

                    b.ToTable("TakenSeats");
                });

            modelBuilder.Entity("Backend.Models.Screening", b =>
                {
                    b.HasOne("Backend.Models.Film", null)
                        .WithMany()
                        .HasForeignKey("FilmID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Models.Room", null)
                        .WithMany()
                        .HasForeignKey("RoomID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Backend.Models.TakenSeat", b =>
                {
                    b.HasOne("Backend.Models.Screening", null)
                        .WithMany()
                        .HasForeignKey("ScreeningID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
