import styled, { keyframes, css } from 'styled-components';
import BootstrapModal from 'react-bootstrap/Modal';
import theme from '../../../../styles/theme';

export const showAnimation = keyframes`
  from{
    left: -320px;
    opacity: 0;
  }

  to{
    left: 0;
    opacity: 1;
  }
`;

export const hideAnimation = keyframes`
  from{
    left: 0;
    opacity: 1;
  }

  to{
    left: -320px;
    opacity: 0;
  }
`;

export const Modal = styled(BootstrapModal)`
  .modal-dialog {
    animation: ${props => (!props.isClosing ? showAnimation : hideAnimation)}
      ease 0.3s;
  }

  .modal-dialog {
    -webkit-transition: opacity 0.3s linear, left 0.3s ease-out;
    -moz-transition: opacity 0.3s linear, left 0.3s ease-out;
    -o-transition: opacity 0.3s linear, left 0.3s ease-out;
    transition: opacity 0.3s linear, left 0.3s ease-out;
    position: fixed;
    margin: auto;
    width: 320px;
    height: 100%;
    -webkit-transform: translate3d(0%, 0, 0);
    -ms-transform: translate3d(0%, 0, 0);
    -o-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0);
  }

  .modal-content {
    height: 100%;
    overflow-y: auto;
    border: none;
    border-radius: 0;
  }

  .modal-header {
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
  }

  .container {
    max-width: none;
  }

  .nav-item {
    a {
      font-size: 16px;
      padding: 8px 16px;
      color: ${theme.color.primaryHover};

      &:hover {
        color: ${theme.color.primary};
      }
    }
  }
`;
