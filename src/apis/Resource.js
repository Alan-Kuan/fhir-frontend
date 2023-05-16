import Req from './Req'

export async function getResources(type) {
    return Req.get(`/${type}`)
        .then(res => {
            return res.data.entry
        })
}

export async function getPatientEverything(patient_id) {
    const everything_url = `/Patient/${patient_id}/$everything`
    let next_url = ''
    let device_next_url = ''

    const timeout_err_handler = (err) => {
        if (err.message.startsWith('timeout')) {
            return []
        }
        throw err
    }

    const items_1 = await Req.get(everything_url)
        .then(res => {
            next_url = res.data.link[0].url
            return res.data.entry ?? []
        })
        .catch(timeout_err_handler)
    const items_2 = await Req.get(next_url)
        .then(res => res.data.entry ?? [])
        .catch(timeout_err_handler)
    const items_3 = await Req.get(everything_url, {
            params: { _type: 'Device' },
        })
        .then(res => {
            device_next_url = res.data.link[0].url
            return res.data.entry ?? []
        })
        .catch(timeout_err_handler)
    const items_4 = await Req.get(device_next_url)
        .then(res => res.data.entry ?? [])
        .catch(timeout_err_handler)
    const items_5 = await Req.get(next_url, {
            params: { _type: 'Patient' },
        })
        .then(res => res.data.entry ?? [])
        .catch(timeout_err_handler)

    return items_1
        .concat(items_2)
        .concat(items_3)
        .concat(items_4)
        .concat(items_5)
}