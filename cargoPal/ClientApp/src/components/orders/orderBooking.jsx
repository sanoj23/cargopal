import React from 'react';

import { Accordion, Card } from 'react-bootstrap';

export default function OrderBooking({ booking }) {
  const { bookingId, packaging, receiverPhone, shipmentId } = booking;

  return (
    <>
      <Accordion.Collapse eventKey={shipmentId}>
        <Card.Body>
          {bookingId} {packaging} {receiverPhone}
        </Card.Body>
      </Accordion.Collapse>
    </>
  );
}
