import React from 'react';

import { Container } from '../styles/pages/search-result';
import NextHead from '../components/NextHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitlePage from '../components/patterns/TitlePage';
import PostLoop from '../components/patterns/PostLoop';

function SearchResult() {
  return (
    <Container>
      <NextHead title="Meu Bolso em Dia" />

      <Header />

      <TitlePage
        title={
          <>
            Resultado da busca por: <span>Investimento</span>
          </>
        }
      />

      <PostLoop />

      <Footer />
    </Container>
  );
}

export default SearchResult;
