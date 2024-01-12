import axios from 'axios';


const api = axios.create({
	baseURL: 'https://santanapay.onrender.com',
});


export default api;