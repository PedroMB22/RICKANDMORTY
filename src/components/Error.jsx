import React from 'react';

const Error = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Error 404</h1>
      <p style={{ fontSize: '24px' }}>La página que buscas no ha sido encontrada.</p>
    </div>
  );
};

export default Error;