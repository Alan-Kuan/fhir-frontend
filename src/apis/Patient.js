import Req from './Req'

export async function addPatient(patient_info) {
    return Req.post('/Patient', {
            resourceType: 'Patient',
            name: [
                {
                    use: 'usual',
                    family: patient_info.last_name,
                    given: patient_info.first_name,
                }
            ],
            gender: patient_info.gender,
            birthDate: patient_info.birthdate,
            telecom: {
                system: 'phone',
                value: patient_info.phone
            },
            communication: {
                language: {
                    text: patient_info.language
                }
            }
        })
}