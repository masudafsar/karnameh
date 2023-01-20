import axios, { AxiosInstance } from 'axios';

class BaseService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
    });
  }
}

export default BaseService;
