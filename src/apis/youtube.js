import axios from "axios";

const KEY = "AIzaSyDgWYnztqvtXHsHCrNkQ86li2m6lytduD4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
