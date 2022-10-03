import PatientCard from '$components/ResourceCard/PatientCard.svelte'
import PersonCard from '$components/ResourceCard/PersonCard.svelte'
import CarePlanCard from '$components/ResourceCard/CarePlanCard.svelte'
import ProcedureCard from '$components/ResourceCard/ProcedureCard.svelte'
import DeviceCard from '$components/ResourceCard/DeviceCard.svelte'

let components = {
    Patient: PatientCard,
    RelatedPerson: PersonCard,
    CarePlan: CarePlanCard,
    Procedure: ProcedureCard,
    Device: DeviceCard,
}

export function getResourceCard(type) {
    return components[type]
}