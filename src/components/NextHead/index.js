import React from 'react';
import Head from 'next/head';

function NextHeader({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default NextHeader;
