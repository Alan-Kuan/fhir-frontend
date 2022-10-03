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
    import PatientCard from '$components/Patient/PatientCard.svelte'
    import { getResources } from '$apis/Resource'

    export let type;

    let components = {
        Patient: PatientCard,
    }
</script>