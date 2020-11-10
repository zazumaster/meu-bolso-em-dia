import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Container, PostParagraph } from '../styles/pages/single-post';

import NextHead from '../components/NextHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import single from '../assets/img/single.png';

function SinglePost() {
  return (
    <Container>
      <NextHead title="Meu Bolso em Dia" />
      <Header />

      <section className="title-single">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                5 NOVAS ideias de renda extra sem sair de casa, usando o
                celular!
              </h1>
              <p className="fs14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <p className="fc-green">
                <small>Finanças | 24 de Outubro | 2020</small>
              </p>
              <ul className="nav nav-social justify-content-center">
                <li className="nav-item">
                  <a className="nav-link pr-2 pl-2" href="#">
                    <FaFacebook className="fab fa-facebook fc-green fs20" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-2 pl-2" href="#">
                    <FaTwitter className="fab fa-twitter fc-green fs20" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-2 pl-2" href="#">
                    <FaInstagram className="fab fa-instagram fc-green fs20" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="post-loop">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="mb-5" align="center">
                <img src={single} width="100%" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="row">
              <PostParagraph className="col-md-8 offset-md-2 pl-1 pr-1 fs14">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  porttitor ipsum maximus, hendrerit mi at, bibendum metus. Sed
                  mattis arcu eu arcu sodales, eget accumsan ipsum lobortis.
                  Suspendisse cursus at risus quis tincidunt. Nulla sollicitudin
                  lacus a mollis mollis. Curabitur eget mi justo. Duis suscipit
                  mollis erat ac congue. Nulla cursus non lorem nec euismod.
                  Suspendisse eleifend est orci, et porttitor elit gravida eget.
                  Mauris accumsan lacus non purus laoreet viverra. Sed
                  vestibulum tortor a sapien aliquet, nec feugiat felis mattis.
                  Praesent et justo semper, rutrum risus vel, pretium nibh.
                  Quisque vitae vestibulum ligula. Phasellus eu ultrices eros.
                  Suspendisse sagittis, velit non hendrerit posuere, arcu dui
                  efficitur dolor, et porta libero eros ac ligula. Morbi mollis
                  massa ligula, sed hendrerit purus lobortis non. Praesent
                  auctor augue vitae congue condimentum.
                </p>
                <p>
                  Suspendisse vel velit arcu. Sed laoreet enim eget congue
                  lacinia. Etiam accumsan est vel dolor pretium lobortis.
                  Praesent blandit laoreet arcu nec vulputate. Duis turpis dui,
                  tristique quis euismod eu, feugiat sed leo. Ut lacinia mollis
                  velit, nec tristique purus mattis eget. Nullam in suscipit
                  magna, a sagittis mi. Aenean a eros eros. Nulla quis iaculis
                  elit. Nulla nisi lectus, hendrerit non blandit ac, sagittis
                  non nulla. Sed id ligula tincidunt, convallis lectus sit amet,
                  dapibus neque. Duis in interdum odio, eget molestie leo.
                  Phasellus dapibus mauris nibh, sed interdum massa ullamcorper
                  non. Duis vel turpis ut eros mattis tempor.
                </p>
                <p>
                  Aenean ac neque et est porttitor vulputate at at tortor.
                  Phasellus dapibus fringilla dui, eget sollicitudin metus
                  mollis sed. Nulla libero ex, posuere non libero quis, commodo
                  elementum nibh. Suspendisse dictum vehicula sapien id pretium.
                  Sed imperdiet quam et venenatis egestas. Fusce pretium ligula
                  ut laoreet cursus. Morbi congue lobortis diam non malesuada.
                  In laoreet semper enim id feugiat. Suspendisse rutrum massa
                  non lobortis hendrerit. Vestibulum cursus mauris sit amet enim
                  varius fringilla.
                </p>
                <p>
                  Quisque varius nulla odio, ullamcorper laoreet ligula
                  ultricies nec. Nullam ut odio eu mauris mattis scelerisque
                  vitae posuere nunc. Suspendisse molestie euismod ultricies.
                  Aenean placerat leo eget consectetur mattis. Sed id ex ex.
                  Praesent faucibus in orci nec dignissim. Etiam rutrum dictum
                  ipsum vel dignissim. Suspendisse a elementum est.
                </p>
                <p>
                  Nam libero sapien, condimentum vel blandit non, pulvinar
                  dictum mauris. Fusce non dui id lacus consequat aliquet.
                  Phasellus non congue ex. Morbi imperdiet fringilla malesuada.
                  Morbi ac mi non odio faucibus convallis id sit amet purus.
                  Mauris fermentum dolor vel justo commodo auctor. Nullam
                  tincidunt, purus sit amet pellentesque aliquet, magna mauris
                  tempor urna, eget facilisis urna libero vel nibh. Nullam
                  rutrum bibendum justo quis lacinia. Duis in dictum sem. Nam
                  tincidunt ultrices nisi, venenatis pretium quam congue non. In
                  aliquam erat sit amet libero aliquet placerat. In hac
                  habitasse platea dictumst. Proin lacus diam, lobortis et
                  dapibus sit amet, sollicitudin vel enim. Aliquam feugiat purus
                  elit, at hendrerit sem feugiat quis. Vestibulum dui massa,
                  suscipit in nisl vitae, dictum eleifend neque.
                </p>
              </PostParagraph>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Container>
  );
}

export default SinglePost;
