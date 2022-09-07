import Req from './Req'

export async function getPatients() {
    return Req.get('/Patient')
        .then(res => {
            return res.data.entry
        })
}