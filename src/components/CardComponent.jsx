import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, subtitle, amount }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{`GTQ ${amount}`}</Card.Text>
        <Card.Link href="#deposits">Depositos</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
