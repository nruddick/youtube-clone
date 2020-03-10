import axios from 'axios';

const KEY = 'AIzaSyDMGd8e6XShR3dC47HrcwaA1u0bKvkVkWk'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});




