import axios from "axios";

class HttpClient {
  initialize() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3001",
      timeout: 5000
    })
  }

  get instance() {
    if (!this.axiosInstance) {
      throw new Error("HttpClient not initialized!");
    }

    return this.axiosInstance;
  }
}

const httpClient = new HttpClient();

export default httpClient;
