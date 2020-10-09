import React from 'react';
import { Badge, Card } from 'react-bootstrap';

export default function Booking({ booking, onRemove }) {
  const {
    bookingId,
    receiverName,
    packaging,
    receiverPhone,
    instructions,
    status,
  } = booking;
  return (
    <div style={{ marginTop: 5, marginBottom: 5 }}>
      <Card style={{ width: '100%', borderRadius: 20 }}>
        <Card.Body>
          <Card.Title>{receiverName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
          <Card.Text>
            Packaging: <b>{packaging}</b>{' '}
            <Badge variant="danger">{instructions}</Badge>
            <br />
            Phone: <b>{receiverPhone}</b>
          </Card.Text>
          {status === 'approved' ? null : (
            <Card.Link onClick={() => onRemove(bookingId)}>Remove</Card.Link>
          )}

          <Card.Link href="/moredetails">More Details</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
