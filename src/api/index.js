import axios from "axios";

const mainURL = axios.create({
  // baseURL: "http://91.210.149.127:8040",
  baseURL: "https://api.kyt.systems",
});

export default mainURL;
