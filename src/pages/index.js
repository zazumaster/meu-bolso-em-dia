import React from 'react';
import { Container } from '../styles/pages/Home';

import NextHead from '../components/NextHead';
import Header from '../components/Header';
import Featured from '../components/patterns/Featured';

export default function Home() {
  return (
    <Container>
      <NextHead title="Meu Bolso em Dia" />
      <Header />
      <div className="box">
        <Featured />

        <div className="container mt-5">
          <div className="line" />
        </div>
      </div>
    </Container>
  );
}
