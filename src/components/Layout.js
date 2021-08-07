import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = ({ meal }) => {
  return (
    <Container>
      {meal}
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
