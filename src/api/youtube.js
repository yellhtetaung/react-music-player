import axios from "axios";

const KEY = "AIzaSyDPt3h1TkUFTcWarpmOHjmzsWBW7zC6YLE";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
