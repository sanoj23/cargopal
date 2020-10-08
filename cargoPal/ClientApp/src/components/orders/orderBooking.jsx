import React from 'react';

export default function OrderBooking({ booking }) {
  const {
    bookingId,
    receiverName,
    receiverPhone,
    item,
    instructions,
    packaging,
    status,
  } = booking;

  return (
    <>
      <tbody>
        <tr>
          <td>{bookingId}</td>
          <td>{receiverName} </td>
          <td>{receiverPhone} </td>
          <td>{item}</td>
          <td>{instructions}</td>
          <td>{packaging}</td>
          <td>{status}</td>
        </tr>
      </tbody>
    </>
  );
}
