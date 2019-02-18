import axios from 'axios';

const api = axios.create({
  baseURL: '', // D E V
  // baseURL: '', //  H O M O L O G A C A O
  // baseURL: '', // D E P L O Y
});

export default api;
