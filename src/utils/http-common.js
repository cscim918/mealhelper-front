import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

export default axios.create({
    baseURL: "http://ec2-3-34-189-174.ap-northeast-2.compute.amazonaws.com:5000/api",
    headers: {
        "Content-type": "application/json"
    }
});