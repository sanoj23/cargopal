import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Schedule({ capacity, origin, available, destination }) {
  return (
    <div style={{ borderStyle: 'solid', marginTop: 5, marginBottom: 5 }}>
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>
            {origin} - {destination}
          </Card.Title>
          <div>
            <Card.Text>
              Capacity: <b>{capacity}</b> Available: <b>{available}</b>
            </Card.Text>

            <Card.Text>Some other details</Card.Text>
          </div>
          <div style={{ float: 'right' }}>
            <Button
              variant="warning"
              style={{ margin: 3 }}
              onClick={() => console.log('update')}
            >
              Update{' '}
            </Button>
            <Button
              variant="danger"
              style={{ margin: 3 }}
              onClick={() => console.log('Deleted')}
            >
              Delete{' '}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
