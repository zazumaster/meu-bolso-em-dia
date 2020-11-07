import React from 'react';
import { Container, Title, Description } from '../styles/pages/Home';

import RocketseatLogo from '../assets/rocketseat.svg';

export default function Home() {
  return (
    <Container>
      <RocketseatLogo alt="Rocketseat" />
      <Title>ReactJS Scructure</Title>

      <Description>ReactJS with NEXT.js template in Javascript</Description>
    </Container>
  );
}
