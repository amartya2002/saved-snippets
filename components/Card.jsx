// components/Card.js
import React from 'react';

const Card = ({ children }) => {
  return <div className="bg-white p-4 rounded border">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div>{children}</div>;
};

export { Card, CardBody };
