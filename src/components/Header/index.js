import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

// CUSTOM IMPORTS
import Logo from '../../assets/img/logo-header.svg';
import {
  Header,
  Navigation,
  SearchButton,
  HeaderIcons,
  HeaderIcon,
} from './styles';
import SearchModal from './components/SearchModal';
import MobileMenu from './components/MobileMenu';

function CustomHeader() {
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const openSearchModal = () => setShowSearchModal(true);
  const openMobileMenu = () => setShowMobileMenu(true);

  return (
    <>
      <Header className="header-mdb">
        <div className="brand-top d-none d-lg-flex">
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="#" className="float-left">
                  <Logo className="logo" />
                </a>
              </div>

              <div className="col">
                <a href="#" className="float-right mt-3">
                  meubolsoemdia.com.br
                </a>

                <HeaderIcons className="header-icons">
                  <HeaderIcon
                    className="header-icon-search"
                    onClick={openSearchModal}
                  >
                    <FaSearch />
                  </HeaderIcon>

                  <HeaderIcon onClick={openMobileMenu}>
                    <FaBars />
                  </HeaderIcon>
                </HeaderIcons>
              </div>
            </div>
          </div>
        </div>

        <Navigation className="navbar navbar-expand-lg navbar-mdb d-none d-lg-flex">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav">
                <li>
                  <a className="nav-link" href="#">
                    finanças
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    planilhas
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    simuladores
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    finanças
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    orçamento familiar
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    contato
                  </a>
                </li>
              </ul>
            </div>

            <SearchButton onClick={openSearchModal}>
              <FaSearch />
            </SearchButton>
          </div>
        </Navigation>
      </Header>

      {/* MODALS */}
      <SearchModal
        show={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      />

      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />
    </>
  );
}

export default CustomHeader;
