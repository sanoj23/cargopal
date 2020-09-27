using System.Collections.Generic;

namespace CargoPal.Data
{
    public interface IShipmentService
    {
        IEnumerable<Shipments> GetShipments();
        Shipments GetShipmentsById(int shipmentId);
        IEnumerable<Shipments> GetShipmentsByUser(int userId);
        void AddShipment(Shipments shipment);
        void UpdateShipment(int shipmentId, Shipments shipment);
        void DeleteShipment(int shipmentId);
    }
}