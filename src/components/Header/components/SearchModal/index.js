import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import Logo from '../../../../assets/img/logo-header.svg';
import SearchButton from '../../../inputs/Button';
import { Modal, Container } from './styles';

function CustomModal({ show, onClose }) {
  const handleClose = () => onClose();

  return (
    <Modal dialogClassName="custom-modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Logo style={{ height: 40 }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="container">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="InputSearch"
                placeholder="Pesquisar no site"
              />
            </div>

            <SearchButton className="float-right" text="pesquisar" href="#" />
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-block btn-dark"
          onClick={handleClose}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

CustomModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomModal;
