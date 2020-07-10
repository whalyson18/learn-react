import axios from 'axios';

//const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });
const api = axios.create({ baseURL: 'http://localhost:3001/game' });
//const api = axios.create({ baseURL: 'MOCK_DATA.csv' });

export default api;