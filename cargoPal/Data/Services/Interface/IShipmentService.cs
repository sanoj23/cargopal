using System.Collections.Generic;

namespace CargoPal.Data
{
    public interface IShipmentService
    {
        IEnumerable<Shipments> GetShipments();
        Shipments GetShipmentsById(int shipmentId);
        IEnumerable<Shipments> GetShipmentsByUserId(int userId);
        // IEnumerable<BuyerBids> GetBuyerBidNotByUserId(int userId);
        void AddShipment(Shipments shipment);
        void UpdateShipment(int shipmentId, Shipments shipment);
        void DeleteShipment(int shipmentId);
    }
}