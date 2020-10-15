using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace CargoPal.Data
{
    public partial class CargoPalContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public CargoPalContext()
        {
        }

        public CargoPalContext(DbContextOptions<CargoPalContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public virtual DbSet<Shipments> Shipments { get; set; }

        public virtual DbSet<Bookings> Bookings { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_configuration.GetConnectionString("CargoPalDB"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Shipments>(entity =>
            {
                entity.HasKey(e => e.ShipmentId)
                    .HasName("PK__Shipment__47217801CFB81387");

                entity.Property(e => e.ShipmentId).HasColumnName("shipmentId");

                entity.Property(e => e.Origin)
                    .IsRequired()
                    .HasColumnName("origin")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Destination)
                    .IsRequired()
                    .HasColumnName("destination")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate)
                    .IsRequired()
                    .HasColumnName("startDate")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .IsRequired()
                    .HasColumnName("endDate")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Capacity).HasColumnName("capacity");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("userId");
                entity.HasOne(d => d.User)
                    .WithMany(p => p.Shipments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Shipments__userI__3A81B327");

            });

            modelBuilder.Entity<Bookings>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__Bookings__C6D03BCD3BD9F416");

                entity.Property(e => e.BookingId).HasColumnName("bookingId");

                entity.Property(e => e.ShipmentId).HasColumnName("shipmentId");
                entity.HasOne(d => d.Shipment)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.ShipmentId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Bookings__shipme__3F466844");

                entity.Property(e => e.UserId).HasColumnName("userId");
                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Bookings__userId__3E52440B");

                entity.Property(e => e.ReceiverName)
                    .IsRequired()
                    .HasColumnName("receiverName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverPhone)
                    .IsRequired()
                    .HasColumnName("receiverPhone")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.ReceiverAddress)
                    .IsRequired()
                    .HasColumnName("receiverAddress")
                    .IsUnicode(false);

                entity.Property(e => e.Item)
                    .IsRequired()
                    .HasColumnName("item")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Instructions)
                    .IsRequired()
                    .HasColumnName("instructions")
                    .IsUnicode(false);

                entity.Property(e => e.Packaging)
                    .IsRequired()
                    .HasColumnName("packaging")
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasColumnName("status")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__CB9A1CFF2E423BCA");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Users__AB6E61644A9DFDBA")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.FirstName)
                    .HasColumnName("firstName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasColumnName("lastName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .HasColumnName("companyName")
                    .HasMaxLength(1000)
                    .IsUnicode(false);


                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasColumnName("phone")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .IsUnicode(false);


                entity.Property(e => e.UserType)
                    .IsRequired()
                    .HasColumnName("userType")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                //         entity.Property(e => e.UserImage).HasColumnName("userImage");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}