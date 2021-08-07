import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CalorieTable from '../components/Table/CalorieTable';
import Header from '../components/Header';

import background from '../assets/meal.jpg';
import './Main.css';

const Main = () => {
  return (
    <div class="c">
      <Header/>
      <h2 align="center" style={{fontFamily:'verdana', fontWeight: 'bold', color: 'green'}}>식단 추천 페이지</h2>
      <div class="a"/>
      <div class="b" align="center">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Category>
            <Link className="btn btn-outline-success btn-lg" role="button" to="/meals/bulkup">
              벌크업
            </Link>
          </Category>
          <Category>
            <Link className="btn btn-outline-success btn-lg" role="button" to="/meals/stay">
              유지
            </Link>
          </Category>
          <Category>
            <Link className="btn btn-outline-success btn-lg" role="button" to="/meals/diet">
              다이어트
            </Link>
          </Category>
        </div>
        <br />
      </div>
      <div align="center">
        <h4>하루 권장 칼로리</h4>
        <br />
        <CalorieTable />
      </div>
    </div>
  );
};

export default Main;

const Category = styled.div`
  margin: 10px;
  padding: 20px;
  font-size: 20px;
`;
const Category2 = styled.div`
  margin: 10px;
  padding-right: 18px;
  font-size: 20px;
`;
