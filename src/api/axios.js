import axios from 'axios'

const ACTIVE_URL = 'https://fakestoreapi.com/'

export default axios.create({
  baseURL: ACTIVE_URL,
})
