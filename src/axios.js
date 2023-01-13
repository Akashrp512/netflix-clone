import axios from 'axios';
// 
// /movie/550?api_key=2ae947988a6f26c74070109101679310

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',

})

export default instance;