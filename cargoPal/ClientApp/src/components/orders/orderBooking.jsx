import React from 'react';
import { Button } from 'react-bootstrap';

export default function OrderBooking({ booking, update }) {
  const {
    bookingId,
    receiverName,
    receiverPhone,
    item,
    instructions,
    packaging,
    status,
  } = booking;

  const handleClick = (accept) => {
    update(bookingId, accept);
  };

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
          {update ? (
            <td>
              <Button
                onClick={() => handleClick(1)}
                style={{ marginRight: 2 }}
                variant="outline-success"
              >
                Accept
              </Button>
              <Button
                onClick={() => handleClick(0)}
                style={{ marginLeft: 2 }}
                variant="outline-danger"
              >
                Reject
              </Button>
            </td>
          ) : null}
        </tr>
      </tbody>
    </>
  );
}
