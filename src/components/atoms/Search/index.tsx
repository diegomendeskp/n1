import React from 'react';
import { Container, Icon, P } from './styles';
import icon from '../../icons/search-solid.svg';
export function Search() {
  return (
    <Container>
      <Icon src={icon} />
      <P>BUSCAR</P>
    </Container>
  );
}

export default Search;
