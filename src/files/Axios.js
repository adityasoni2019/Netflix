// This is basically for fetching data from the movie DB. 
// API Key - 83ac6f402f6c43588f17bc90e137cf64

import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3" 
})

export default instance;