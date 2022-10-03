import PatientCard from '$components/ResourceCard/PatientCard.svelte'
import PersonCard from '$components/ResourceCard/PersonCard.svelte'
import PractitionerCard from '$components/ResourceCard/PractitionerCard.svelte'
import OrganizationCard from '$components/ResourceCard/OrganizationCard.svelte'
import CarePlanCard from '$components/ResourceCard/CarePlanCard.svelte'
import ProcedureCard from '$components/ResourceCard/ProcedureCard.svelte'
import DeviceCard from '$components/ResourceCard/DeviceCard.svelte'
import AllergyIntoleranceCard from '$components/ResourceCard/AllergyIntoleranceCard.svelte'

let components = {
    Patient: PatientCard,
    RelatedPerson: PersonCard,
    Practitioner: PractitionerCard,
    Organization: OrganizationCard,
    CarePlan: CarePlanCard,
    Procedure: ProcedureCard,
    Device: DeviceCard,
    AllergyIntolerance: AllergyIntoleranceCard,
}

export function getResourceCard(type) {
    return components[type]
}