import axios, {CanceledError} from "axios";

const axiosGame = axios.create({
    baseURL: 'https://api.rawg.io/api/',
})


export {CanceledError};

export default axiosGame;
