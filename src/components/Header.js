import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return <Container><Link to='/' style={{textDecoration: 'none', fontWeight: 'bold'}}><button className="btn btn-success" role="button">
  MEALHELPER
</button></Link></Container>;
};

export default Header;

const Container = styled.div`
  margin-bottom: 15px;
`;
