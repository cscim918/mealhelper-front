import http from '../http-common';

const getAll = () => {
    return http.get("/meals");
}

const create = data => {
    return http.post("/",data);
};

const removeAll = () => {
    return http.delete("/meals");
  };

const findByName = name =>{
    return http.get(`/meals?name=${name}`)
};

export default {getAll, create, findByName, removeAll};