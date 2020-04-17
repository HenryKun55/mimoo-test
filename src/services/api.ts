import axios from 'axios'

export const baseURL = 'https://virtserver.swaggerhub.com/mimoo-tech/frontend-challenge-api/1.0.0/'

const api = axios.create({ baseURL })

export default api
