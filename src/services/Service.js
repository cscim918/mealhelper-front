import http from '../utils/http-common';
    
const getAllBulkup = () => {
    return http.get("/meals/bulkup");
}

const getAllStay = () => {
    return http.get("/meals/stay");
}

const getAllDiet = () => {
    return http.get("/meals/diet");
}

const create = data => {
    return http.post("/meals/addmeal",data);
};

export default {getAllBulkup,getAllStay,getAllDiet,create};