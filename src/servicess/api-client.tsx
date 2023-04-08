import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key: 'f881cf5c8a69479a8daeb50af1c18ebb'
    }
})