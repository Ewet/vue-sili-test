import api from 'api/axios.js';

export default params => api.get('/boxserver/tickets/dept', params);
