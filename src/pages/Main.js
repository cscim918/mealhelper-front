import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ManageTable from '../components/Table/ManageTable';
import background from '../meal.jpg';
import './Main.css';

const Main = () => {
  return (
    <div>
      <div class="a" style={{backgroundImage: `url(${background})`}}>
        <h2 align="center">식단 추천 페이지</h2>
      </div>  
      <div class="b" align="center">
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <Category>
        <Link to="/meals/bulkup">
          <div>벌크업</div>
        </Link>
        </Category>
        <Category>
        <Link to="/meals/stay">
          <div>유지</div>
        </Link>
        </Category>
        <Category>
        <Link to="/meals/diet">
          <div>다이어트</div>
        </Link>
        </Category>
      </div>
      <br />
      <Link to="/meals/addmeal">
        <button type="button" class="btn btn-primary">
          식단 추가
        </button>
      </Link>
      </div>
      <br/>
      <br/>
    <div align='center'>
      <ManageTable/>
    </div>
    </div>
  );
};

export default Main;

const Category = styled.div`
  margin: 10px;
  padding: 20px;
  font-size: 20px;
`