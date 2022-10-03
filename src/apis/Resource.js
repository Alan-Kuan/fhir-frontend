import Req from './Req'

export async function getResources(type) {
    return Req.get(`/${type}`)
        .then(res => {
            return res.data.entry
        })
}