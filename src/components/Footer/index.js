import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import Button from '../inputs/Button';

function Footer() {
  return (
    <footer className="footer-mdb">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="text-center">
              <div>
                <img src="/svgs/logo-footer.svg" height="80px" alt="" />
              </div>
            </p>
            <div style={{ width: 160, margin: '0 auto', paddingLeft: 10 }}>
              <ul className="nav nav-social justify-content-center">
                <li className="nav-item">
                  <a className="nav-link pr-0" href="#">
                    <FaFacebook className="fab fa-facebook fc-green fs24" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0" href="#">
                    <FaTwitter className="fab fa-twitter fc-green fs24" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr-0" href="#">
                    <FaInstagram className="fab fa-instagram fc-green fs24" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 d-none d-lg-flex">
            <ul>
              <div className="line-f" />
              <li>
                <a href="#">finanças</a>
              </li>
              <li>
                <a href="#">planilhas</a>
              </li>
              <li>
                <a href="#">simuladores</a>
              </li>
              <li>
                <a href="#">dicas de investimento</a>
              </li>
              <li>
                <a href="#">orçamento familiar</a>
              </li>
              <li>
                <a href="#">contato</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 d-none d-lg-flex">
            <ul>
              <div className="line-f" />
              <li>
                <a href="#">meu bolso em dia</a>
              </li>
              <li>
                <a href="#">sobre a febraban</a>
              </li>
              <li>
                <a href="#">simuladores</a>
              </li>
              <li>
                <a href="#">faq</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <div className="line-f" />
            <div className="pr-5">
              <h4>Cadastre-se na nossa newsletter</h4>
              <p>Seja avisado sempre que um novo conteúdo entrar no ar</p>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="seu e-mail"
                />
              </div>
              <Button
                href="#"
                onClick={() => document.getElementById('mail_form').submit()}
                className="float-right"
                text="cadastrar"
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
