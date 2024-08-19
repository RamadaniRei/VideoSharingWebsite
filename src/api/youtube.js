import axios from "axios";

export default axios.create({
  baseURL: "https://ww.googleapis.com/youtube/v3",
});
