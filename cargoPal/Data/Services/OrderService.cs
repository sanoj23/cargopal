using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace CargoPal.Data
{
    public class OrderService : IOrderService
    {
        readonly CargoPalContext _CargoPalContext;

        public OrderService(CargoPalContext systemsContext)
        {
            _CargoPalContext = systemsContext;
        }

        public IEnumerable<Orders> GetOrders()
        {
            return _CargoPalContext.Orders
                .Include(o => o.Shipment)
                .Include(o => o.Booking)
                .ToList();
        }

        public Orders GetOrderById(int orderId)
        {
            var orderExist = _CargoPalContext.Orders.FirstOrDefault(o => o.OrderId == orderId);
            
            if (orderExist == null)
            {
                throw new Exception("Order Not Found");
            }

            return orderExist;
        }

        public IEnumerable<Orders> GetOrdersByShipment(int shipmentId)
        {
            var orderExist = _CargoPalContext.Orders.FirstOrDefault(o => o.ShipmentId == shipmentId);

            if (orderExist == null)
            {
                throw new Exception("Order Not Found");
            }

            return _CargoPalContext.Orders.Where(o => o.ShipmentId == shipmentId).ToList();
        }

        public IEnumerable<Orders> GetOrdersByBooking(int bookingId)
        {
            var orderExist = _CargoPalContext.Orders.FirstOrDefault(o => o.BookingId == bookingId);

            if (orderExist == null)
            {
                throw new Exception("Order Not Found");
            }

            return _CargoPalContext.Orders.Where(o => o.BookingId == bookingId).ToList();
        }

        public void AddOrder(Orders order)
        {
            if (order == null)
            {
                throw new Exception("Incomplete Fields");
            }

            _CargoPalContext.Orders.Add(order);
            _CargoPalContext.SaveChanges();
        }
    }
}