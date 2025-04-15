import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:3000',  //url is server url
});

export default instance;