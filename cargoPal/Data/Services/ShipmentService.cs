using System;
using System.Collections.Generic;
using System.Linq;


namespace CargoPal.Data
{
    public class ShipmentService : IShipmentService
    {
        readonly CargoPalContext _CargoPalContext;

        public ShipmentService(CargoPalContext systemsContext)
        {
            _CargoPalContext = systemsContext;
        }
        public IEnumerable<Shipments> GetShipments()
        {
            return _CargoPalContext.Shipments.ToList();
        }

        public Shipments GetShipmentsById(int shipmentId)
        {
            var shipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == shipmentId);
            if (shipmentExists == null)
            {
                throw new Exception("Shipment Not Found");
            }
            else
            {
                return _CargoPalContext.Shipments.FirstOrDefault(s => s.ShipmentId == shipmentId);
            }
        }

        public IEnumerable<Shipments> GetShipmentsByUser(int userId)
        {
            var shipmentExists = _CargoPalContext.Shipments.FirstOrDefault(ship => ship.UserId == userId);
            if (shipmentExists == null)
            {
                throw new Exception("Shipment Not Found");
            }
            else
            {
                return _CargoPalContext.Shipments.Where(s => s.UserId == userId).ToList();
            }
        }

        public void AddShipment(Shipments shipment)
        {

            if (shipment == null)
            {
                throw new Exception("Incomplete Data");
            }
            else
            {
                _CargoPalContext.Shipments.Add(shipment);
                _CargoPalContext.SaveChanges();
            }
        }

        public void UpdateShipment(int ShipmentId, Shipments shipment)
        {
            var shipmentExists = _CargoPalContext.Shipments.FirstOrDefault(n => n.ShipmentId == ShipmentId);
            if (shipmentExists != null)
            {
                if (shipment.Status != null)
                {
                    shipmentExists.Status = shipment.Status;
                }
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