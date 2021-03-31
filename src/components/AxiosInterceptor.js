// ./components/AxiosInterceptor.js
import axios from "axios";

//Définition des types de flux attendus en fonction des types de requête/
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

// Définition de l'URL de base. Pratique, car les ports peuvent changer !
const baseUrl = "http://127.0.0.1:8000/";

axios.defaults.baseURL = baseUrl;

export default axios