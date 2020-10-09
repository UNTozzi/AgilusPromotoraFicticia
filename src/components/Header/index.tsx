import React from 'react';

import { Container, Logo, MenuItem } from './style';

const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <MenuItem>SIMULAÇÃO</MenuItem>
      <Logo />
      <MenuItem>PARCEIROS</MenuItem>
    </Container>
  );
};

export default Header;
