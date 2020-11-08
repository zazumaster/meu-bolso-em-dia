import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../../assets/img/logo-header.svg';
import { Modal } from './styles';

function HeaderMobileMenu({ show, onClose }) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);

    // Delay closing to animation
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <Modal
      animation={false}
      show={show}
      isClosing={isClosing}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Logo style={{ height: 40 }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                finanças
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                planilhas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                simuladores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                finanças
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                orçamento familiar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                meu bolso em dia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                sobre a febraban
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                simuladores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                faq
              </a>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

HeaderMobileMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HeaderMobileMenu;
