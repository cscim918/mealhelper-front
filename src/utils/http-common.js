import axios from 'axios'

export default axios.create({
    baseURL: 'http://ec2-3-34-253-134.ap-northeast-2.compute.amazonaws.com:5000/api',
    headers: {
        "Content-type": "application/json"
    }
});