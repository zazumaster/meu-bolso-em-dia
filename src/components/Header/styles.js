import styled from 'styled-components';

import theme from '../../styles/theme';

export const Header = styled.header`
  background: #ffffff;

  .brand-top {
    display: flex !important;
    padding: 10px 0;
    height: 70px;
  }

  .logo {
    height: 50px;
  }

  .mt-3 {
    text-decoration: none;
    font-size: 16px;
    color: ${theme.color.primary};

    &:hover {
      color: ${theme.color.accent};
    }
  }

  @media (max-width: ${theme.breakPoint.laptop}) {
    .brand-top {
      height: 60px;
    }

    .logo {
      height: 40px;
    }

    .mt-3 {
      display: none;
    }

    .header-icons {
      display: flex;
    }
  }
`;

export const Navigation = styled.nav`
  background: #a3d2b1;
  height: 53px;
  font-size: 14px;

  ul {
    list-style: none;
  }
`;

export const SearchButton = styled.a`
  margin-left: auto;
  cursor: pointer;
  background: none;
  border: none;
  align-self: center;

  svg {
    height: 14px;
    width: 14px;
    color: ${props => props.theme.color.primary};
  }

  &:hover {
    svg {
      color: ${props => props.theme.color.background};
    }
  }
`;

export const HeaderIcons = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;

  .header-icon-search {
    margin-right: 48px;
  }
`;

export const HeaderIcon = styled(SearchButton)`
  margin-left: unset;

  svg {
    height: 22px;
    width: 22px;
  }

  &:hover {
    svg {
      color: ${props => props.theme.color.primaryHover};
    }
  }
`;
