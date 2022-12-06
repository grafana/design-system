import React from 'react';

export default function FooterWrapper() {
  const text = `Copyright ${new Date().getFullYear()} © Grafana Labs.`;
  return (
    <>
      <div id='footer'>
        <p>{text}</p>
      </div>
    </>
  );
}
