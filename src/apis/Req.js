import axios from 'axios'

export default axios.create({
    baseURL: localStorage.getItem('endpoint'),
    headers: {
        'Content-Type': 'application/fhir+json',
    },
    auth: {
        username: localStorage.getItem('account'),
        password: localStorage.getItem('password')
    }
})
