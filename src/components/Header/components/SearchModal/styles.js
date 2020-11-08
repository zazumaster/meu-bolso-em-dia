import styled from 'styled-components';
import BootstrapModal from 'react-bootstrap/Modal';

export const Container = styled.div``;

export const Modal = styled(BootstrapModal)`
  .custom-modal {
    width: calc(100% - 16px);
    max-width: 1140px !important;
  }

  .modal-header {
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
  }

  .container {
    max-width: none;
  }
`;
