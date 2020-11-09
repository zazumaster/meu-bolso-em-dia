import React from 'react';

import post1 from '../../../assets/img/post1.png';
import post2 from '../../../assets/img/post2.png';
import post3 from '../../../assets/img/post3.png';
import ads from '../../../assets/img/ads.png';
import Button from '../../inputs/Button';

function PostLoop() {
  return (
    <section className="post-loop">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5 pr-4">
            <div className="post">
              <div className="row">
                <div className="col-md-4">
                  <img src={post1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h3>
                    Comprar ou alugar? Descubra o que é melhor no SEU caso!
                  </h3>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="fc-green text-left fs12">
                        finanças | 24 de Outubro | 2020
                      </p>
                    </div>
                    <div className="col-md-5">
                      <nav
                        className="nav fs12 justify-content-end"
                        style={{ marginTop: '-5px' }}
                      >
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          Compartilhar:
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-facebook fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-instagram fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-twitter fs14" />
                        </a>
                      </nav>
                    </div>
                  </div>
                  <p className="line-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="row">
                <div className="col-md-4">
                  <img src={post2} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h3>
                    Comprar ou alugar? Descubra o que é melhor no SEU caso!
                  </h3>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="fc-green text-left fs12">
                        finanças | 24 de Outubro | 2020
                      </p>
                    </div>
                    <div className="col-md-5">
                      <nav
                        className="nav fs12 justify-content-end"
                        style={{ marginTop: '-5px' }}
                      >
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          Compartilhar:
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-facebook fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-instagram fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-twitter fs14" />
                        </a>
                      </nav>
                    </div>
                  </div>
                  <p className="line-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="post">
              <div className="row">
                <div className="col-md-4">
                  <img src={post3} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h3>
                    Comprar ou alugar? Descubra o que é melhor no SEU caso!
                  </h3>
                  <div className="row">
                    <div className="col-md-7">
                      <p className="fc-green text-left fs12">
                        finanças | 24 de Outubro | 2020
                      </p>
                    </div>
                    <div className="col-md-5">
                      <nav
                        className="nav fs12 justify-content-end"
                        style={{ marginTop: '-5px' }}
                      >
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          Compartilhar:
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-facebook fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-instagram fs14" />
                        </a>
                        <a className="nav-link pr-0 pl-2 fc-green" href="#">
                          <i className="fab fa-twitter fs14" />
                        </a>
                      </nav>
                    </div>
                  </div>
                  <p className="line-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <p>
              <a href="#" className="float-right">
                <Button href="#" className="float-right" text="ver mais" />
              </a>
            </p>
          </div>

          <div className="col-md-4">
            <div className="sidebar">
              <h4>Conteúdo em alta</h4>

              <div className="sidebar-menu mb-5">
                <ul>
                  <li>
                    <a href="#">5 NOVAS ideias de renda extra</a>
                  </li>
                  <li>
                    <a href="#">
                      Comprar ou alugar? Descubra o que é melhor no SEU caso!
                    </a>
                  </li>
                  <li>
                    <a href="#">5 NOVAS ideias de renda extra</a>
                  </li>
                  <li>
                    <a href="#">
                      Comprar ou alugar? Descubra o que é melhor no SEU caso!
                    </a>
                  </li>
                  <li>
                    <a href="#">5 NOVAS ideias de renda extra</a>
                  </li>
                </ul>
              </div>
              <p className="mb-0">
                <small>Publicidade</small>
              </p>
              <img src={ads} alt="" width="100%" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostLoop;
