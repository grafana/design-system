import React from 'react';
import Layout from '@theme/Layout';

export default function anyMethodNameHere() {
  return (
    <Layout title="Page template" description="Page template">
      <div
        id='pageTemplate'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}>
        <p>
          Page template
        </p>
      </div>
    </Layout>
  );
}
