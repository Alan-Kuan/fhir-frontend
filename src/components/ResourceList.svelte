<div>
    {#await getResources(type)}
        <p>Waiting...</p>
    {:then resources} 
        {#each resources as resource}
            <svelte:component
                this={components[type]}
                data={resource.resource}
            />
        {/each}
    {:catch err}
        <p>Error: { err.message }</p>
    {/await}
</div>

<script>
    import PatientCard from '$components/ResourceCard/PatientCard.svelte'
    import PersonCard from '$components/ResourceCard/PersonCard.svelte'
    import CarePlanCard from '$components/ResourceCard/CarePlanCard.svelte'
    import ProcedureCard from '$components/ResourceCard/ProcedureCard.svelte'
    import DeviceCard from '$components/ResourceCard/DeviceCard.svelte'
    import { getResources } from '$apis/Resource'

    export let type;

    let components = {
        Patient: PatientCard,
        RelatedPerson: PersonCard,
        CarePlan: CarePlanCard,
        Procedure: ProcedureCard,
        Device: DeviceCard,
    }
</script>