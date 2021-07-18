import React, { useState,useEffect, Component } from "react";
import Service from "../services/Service";
import { Link } from 'react-router-dom';

function Meal(){
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(()=>{
    retrieveMeals();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };
  const retrieveMeals = () => {
    Service.getAll()
      .then(response => {
        setMeals(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMeals();
    setCurrentMeal(null);
    setCurrentIndex(-1);
  }

  const setActiveMeal = (meal, index) => {
    setCurrentMeal(meal);
    setCurrentIndex(index);
  };

  const removeAllMeals = () => {
    Service.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () =>{
    Service.findByName(searchName)
      .then(response =>{
        setMeals(response.data)
      })
      .catch(e=>{
        console.log(e);
      });
  };

  return(
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Meals</h4>

        <ul className="list-group">
          {meals &&
            meals.map((meal, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMeal(meal, index)}
                key={index}
              >
                {meal.name}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllMeals}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentMeal ? (
          <div>
            <h4>Meal</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentMeal.name}
            </div>
            <div>
              <label>
                <strong>morning:</strong>
              </label>{" "}
              {currentMeal.morning}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentMeal.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/meals/" + currentMeal.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Meal...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meal;

// import React, { Component } from 'react';
// import { Button, Container, Table } from 'reactstrap';
// import { Link } from 'react-router-dom';

// class Meal extends Component{
//   constructor(props){
//     super(props);
//     this.state = {users: [], isLoading: true};
//   }
//   componentDidMount() {
//     this.setState({isLoading: true});

//     fetch('/')
//       .then(response => response.json())
//       .then(data => this.setState({users: data, isLoading: false}));
//   }
//   render() {
//     const {users, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const usersList = users.map(user => {
//       return <tr key={user.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{user.name}</td>
//         <td>{user.morning}</td>
//         <td>{user.lunch}</td>
//         <td>{user.dinner}</td>
//         <td>{user.snack1}</td>
//         <td>{user.snack2}</td>
//         <td>{user.calorie}</td>
//         <td>{user.gender}</td>
//         <td>{user.purpose}</td>
//       </tr>
//     });

//     return (
//       <div>
//         <Container fluid>
//           <h3>Meals List</h3>
//           <Table className="mt-4">
//             <thead>
//               <tr>
//                 <th width="20%">Firstname</th>
//                 <th width="20%">Lastname</th>
//                 <th width="10%">Age</th>
//                 <th>Address</th>
//                 <th>Copyrightby</th>
//                 <th width="10%">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//             {usersList}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }

// export default Meal;