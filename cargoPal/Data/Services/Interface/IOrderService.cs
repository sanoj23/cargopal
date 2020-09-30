using System.Collections.Generic;

namespace CargoPal.Data
{
    public interface IOrderService
    {
        IEnumerable<Orders> GetOrders();
        Orders GetOrderById(int orderId);
        IEnumerable<Orders> GetOrdersByShipment(int sellerBidId);
        IEnumerable<Orders> GetOrdersByBooking(int buyerBidId);
        void AddOrder(Orders order);
    }
}