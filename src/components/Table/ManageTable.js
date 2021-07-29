import React from 'react';
import { useTable } from 'react-table';
import useData from './useData';
import useColumns from './useColumns';
import './ManageTable.css';

function ManageTable() {
  return (
    <table>
      <tr>
        <th>Age</th>
        <td>6-8</td>
        <td>9-11</td>
        <td>12-14</td>
        <td>15-18</td>
        <td>19-29</td>
        <td>30-39</td>
        <td>40-49</td>
        <td>50-64</td>
        <td>65-74</td>
        <td>75이상</td>
      </tr>
      <tr>
        <th>Man</th>
        <td>1700</td>
        <td>2100</td>
        <td>2500</td>
        <td>2700</td>
        <td>2600</td>
        <td>2400</td>
        <td>2400</td>
        <td>2200</td>
        <td>2000</td>
        <td>2000</td>
      </tr>
      <tr>
        <th>Woman</th>
        <td>1500</td>
        <td>1800</td>
        <td>2000</td>
        <td>2000</td>
        <td>2100</td>
        <td>1900</td>
        <td>1900</td>
        <td>1800</td>
        <td>1600</td>
        <td>1600</td>
      </tr>
    </table>
  );
}

export default ManageTable;
