import axios from 'axios';

const KEY = 'AIzaSyB6ROU5i_JE8Q9cfxtReYUeY9Bx-7G7QQM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
