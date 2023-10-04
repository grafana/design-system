import React from 'react';

export default function FooterWrapper() {
  const text = `Copyright ${new Date().getFullYear()} © Grafana Labs.`;
  return (
    <>
      <div id='footer'>
        <p>{text}</p>
        <a rel='noopener noreferrer' href='https://grafana.com/docs/grafana/latest/'>Docs</a>
        <a rel='noopener noreferrer' href='https://grafana.com/blog/'>Blog</a>
        <a rel='noopener noreferrer' href='https://grafana.com/products/cloud/'>Products</a>
      </div>
    </>
  );
}
