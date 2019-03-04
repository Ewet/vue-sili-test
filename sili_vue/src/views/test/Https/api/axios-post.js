import api from 'api/axios.js';

export default params => api.post('/boxserver/box/firmware/list', params);
