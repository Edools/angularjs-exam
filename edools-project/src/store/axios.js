import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://core.myedools.info/'
})

export const AUTH_TOKEN = '06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d'

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.defaults.headers.common['Authorization'] = 'Token token=' + AUTH_TOKEN

export default instance
