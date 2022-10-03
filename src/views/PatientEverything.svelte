<main>
    <h2>Patient Everything</h2>
    <form on:submit|preventDefault={onSubmit}>
        <span>Patient ID</span>
        <input type="text" bind:value={patient_id} />
        <button type="submit">Submit</button>
    </form>
    <div class="list">
        {#each resources as resource}
        <svelte:component
            this={getResourceCard(resource.resource.resourceType)}
            data={resource.resource}
        />
        {/each}
    </div>
</main>

<script>
    import { getPatientEverything } from '$apis/Resource'
    import { getResourceCard } from '$apis/ResourceCard'

    let patient_id = ''
    let resources = []

    function onSubmit() {
        getPatientEverything(patient_id)
            .then(res => {
                resources = res
            })
    }
</script>

<style>
    .list {
        margin-top: 2rem;
    }
</style>