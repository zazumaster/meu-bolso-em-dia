import styled from 'styled-components';
import BootstrapCarrousel from 'react-bootstrap/Carousel';

export const Carousel = styled(BootstrapCarrousel)`
  .carousel-icon {
    height: 60px;
    width: 60px;
    color: ${props => props.theme.color.primary};
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }
`;
