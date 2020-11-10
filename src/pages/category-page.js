import React from 'react';

import { Container } from '../styles/pages/category-page';
import NextHead from '../components/NextHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitlePage from '../components/patterns/TitlePage';
import PostLoop from '../components/patterns/PostLoop';

function CategoryPage() {
  return (
    <Container>
      <NextHead title="Meu Bolso em Dia" />

      <Header />

      <TitlePage title="Investimento" />

      <PostLoop />

      <Footer />
    </Container>
  );
}

export default CategoryPage;
