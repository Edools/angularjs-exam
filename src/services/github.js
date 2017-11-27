import axios from 'axios';
import queryString from 'query-string'

const getQueryString = () => {
  const params = {
    client_id: '7527375cd264c8530f30',
    client_secret: '8675345800219782348c21267e31d18b15c5aea3'
  }

  return '?' + queryString.stringify(params);
}

class GitHubService {
  url = 'https://api.github.com/';

  getUser(username) {
    return axios.get(`${this.url}users/${username}${getQueryString()}`)
  }

  allUsers() {
    return axios.get(`${this.url}users${getQueryString()}`)
  }
}

export default GitHubService
