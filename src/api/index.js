import axios from "axios";

const mainURL = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "",
});

export default mainURL;
