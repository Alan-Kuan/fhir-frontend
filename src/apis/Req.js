import axios from 'axios'

const base_url = import.meta.env.DEV ? 
    localStorage.getItem('endpoint') :
    '/api';

export default axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/fhir+json',
    },
    auth: {
        username: localStorage.getItem('account'),
        password: localStorage.getItem('password')
    }
})
