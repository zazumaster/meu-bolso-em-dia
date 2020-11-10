import styled from 'styled-components';

import theme from '../theme';

export const Container = styled.div`
  background: #fff;
`;

export const PostParagraph = styled.div`
  p {
    @media (max-width: ${theme.breakPoint.tablet}) {
      padding: 0 30px;
    }
  }
`;
