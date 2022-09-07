import axios from 'axios'
import https from 'https'

const base_url = import.meta.env.VITE_FHIR_API_BASE_URL

export default axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/fhir+json',
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
})