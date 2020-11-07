import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 40px;
  color: ${props => props.theme.color.primary};
  font-size: 24px;
`;

export const Description = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.color.text};
  font-size: 16px;
`;
