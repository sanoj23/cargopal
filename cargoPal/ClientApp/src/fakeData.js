export const Shipments = [
  {
    shipmentId: 21,
    userId: 11,
    origin: "colombo",
    destination: "chennai",
    startdate: "01/10/2020",
    enddate: "03/10/2020",
    capacity: 100,
    status: "Shipped",
  },

  {
    shipmentId: 22,
    userId: 12,
    origin: "colombo",
    destination: "singapore",
    startdate: "05/10/2020",
    enddate: "08/10/2020",
    capacity: 50,
    status: "In Transit",
  },

  {
    shipmentId: 23,
    userId: 13,
    origin: "colombo",
    destination: "malaysia",
    startdate: "01/09/2020",
    enddate: "02/09/2020",
    capacity: 30,
    status: "Arrived",
  },
  {
    shipmentId: 24,
    userId: 14,
    origin: "colombo",
    destination: "maldives",
    startdate: "05/11/2020",
    enddate: "08/11/2020",
    capacity: 300,
    status: "Shipped",
  },
];

export const Booking = [
  {
    bookingId: 1,
    userId: 1,
    shipmentId: 1,
    receiverName: "Eliza Smith",
    receiverPhone: "91-995-5513-746",
    receiverAddress:
      "9/10 Krishna Chaya, Khar Muncipal Market 1 St Road, Khar, Mumbai",
    item: "food",
    instructions: "fragile",
    packaging: "Medium",
    status: "Approved",
  },

  {
    bookingId: 2,
    userId: 2,
    shipmentId: 2,
    receiverName: "Lee Young",
    receiverPhone: "6585557997",
    receiverAddress: "590 Yio Chu Kang Road #03-01, Singapore",
    item: "food",
    instructions: "fragile",
    packaging: "Large",
    status: "Approved",
  },

  {
    bookingId: 3,
    userId: 3,
    shipmentId: 3,
    receiverName: "Sarah Miller",
    receiverPhone: "601355532",
    receiverAddress: "E913 2Nd Floor Jalan Bukit Ubi , Kuantan, Malaysia",
    item: "food",
    instructions: "fragile",
    packaging: "Small",
    status: "Approved",
  },

  {
    bookingId: 4,
    userId: 4,
    shipmentId: 4,
    receiverName: "Eliza Smith",
    receiverPhone: "22355555240",
    receiverAddress: "901 Lorong 4 Kampung Bercham, Male main Island",
    item: "food",
    instructions: "fragile",
    packaging: "Small",
    status: "Rejected",
  },
];

export const orders = [
  {
    orderId: 1,
    shipmentId: 1,
    bookingId: 1,
    status: "Available",
  },
  {
    orderId: 2,
    shipmentId: 2,
    bookingId: 2,
    status: "Dropped off",
  },
  {
    orderId: 3,
    shipmentId: 3,
    bookingId: 3,
    status: "On the way",
  },
  {
    orderId: 4,
    shipmentId: 4,
    bookingId: 4,
    status: "Arrived",
  },
];
