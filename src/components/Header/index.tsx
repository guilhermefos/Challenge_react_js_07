import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link
            style={{
              borderBottom:
                history.location.pathname === '/' ? '2px solid #ff872c' : '',
            }}
            to="/"
          >
            Listagem
          </Link>
          <Link
            style={{
              borderBottom:
                history.location.pathname === '/import'
                  ? '2px solid #ff872c'
                  : '',
            }}
            to="/import"
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
