using System;
using System.Collections.Generic;
using System.Linq;

namespace CargoPal.Data
{
    public class ShipmentService : IShipmentService
    {
        readonly CargoPalContext _CargoPalContext;

        public ShipmentService(CargoPalContext systemContext)
        {
            _CargoPalContext = systemContext;
        }
        public IEnumerable<Shipments> GetShipments()
        {
            return _CargoPalContext.Shipments.ToList();
        }

        public Shipments GetShipmentsById(int ShipmentId)
        {
            var ShipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == ShipmentId);
            if (ShipmentExists == null)
            {
                throw new Exception("Shipment Not Found");
            }
            else
            {
                return _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == ShipmentId);
            }
        }

        public IEnumerable<Shipments> GetShipmentsByUserId(int userId)
        {
            var ShipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.UserId == userId);
            if (ShipmentExists == null)
            {
                throw new Exception("Shipment Not Found");
            }
            else
            {
                return _CargoPalContext.Shipments.Where(n => n.UserId == userId).ToList();
            }
        }

        // public IEnumerable<Shipments> GetshipmentNotByUserId(int userId)
        // {
        //     var UserExists = _CargoPalContext.Users.FirstOrDefault(u => u.UserId == userId);
        //     if (UserExists == null)
        //     {
        //         throw new Exception("User does not exist");
        //     }
        //     else
        //     {
        //         return _CargoPalContext.Shipments.Where(n => n.UserId != userId).ToList();
        //     }
        // }

        public void AddShipment(Shipments shipment)
        {

            if (shipment == null)
            {
                throw new Exception("Incomplete Fields");
            }
            else
            {
                _CargoPalContext.Shipments.Add(shipment);
                _CargoPalContext.SaveChanges();
            }
        }

        public void UpdateShipment(int ShipmentId, Shipments shipment)
        {
            var ShipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == ShipmentId);
            if (ShipmentExists != null)
            {
                // if (shipment.Quality != null) { ShipmentExists.Quality = shipment.Quality; }
                // if (shipment.Quantity != 0.00) { ShipmentExists.Quantity = shipment.Quantity; }
                // if (shipment.Price != 0.00) { ShipmentExists.Price = shipment.Price; }
                // if (shipment.PaymentIn != null) { ShipmentExists.PaymentIn = shipment.PaymentIn; }
                // if (shipment.Status != null) { ShipmentExists.Status = shipment.Status; }
                _CargoPalContext.SaveChanges();
            }
            else
            {
                throw new Exception("Failed to Update");
            }
        }

        public void DeleteShipment(int ShipmentId)
        {
            var ShipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == ShipmentId);
            if (ShipmentExists == null)
            {
                throw new Exception("Shipment Not Found");
            }
            else
            {
                _CargoPalContext.Shipments.Remove(ShipmentExists);
                _CargoPalContext.SaveChanges();
            }
        }
    }
}