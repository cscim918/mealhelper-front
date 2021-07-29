import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CalorieTable from '../components/Table/CalorieTable';
import background from '../meal.jpg';
import './Main.css';

const Main = () => {
  return (
    <div>
      <div class="a" style={{ backgroundImage: `url(${background})` }}>
        <h2 align="center">식단 추천 페이지</h2>
      </div>
      <div class="b" align="center">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Category>
            <Link className="btn btn-outline-primary btn-lg" role="button" to="/meals/bulkup">
              벌크업
            </Link>
          </Category>
          <Category>
            <Link className="btn btn-outline-primary btn-lg" role="button" to="/meals/stay">
              유지
            </Link>
          </Category>
          <Category>
            <Link className="btn btn-outline-primary btn-lg" role="button" to="/meals/diet">
              다이어트
            </Link>
          </Category>
        </div>
        <br />
        <Category2>
          <Link className="btn btn-primary" role="button" to="/meals/addmeal">
            식단 추가
          </Link>
        </Category2>
        <br />
        <br />
      </div>
      <div align="center">
        <h4>하루 권장 칼로리</h4>
        <br/>
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
  padding-right: 15px;
  font-size: 20px;
`;
