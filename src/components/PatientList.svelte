<script>
    import PatientCard from '$components/PatientCard.svelte'
    import { getPatients } from '$apis/Patient'
</script>

<main>
    {#await getPatients()}
        <p>Waiting...</p>
    {:then patients} 
        {#each patients as patient}
            <PatientCard data={patient} />
        {/each}
    {:catch err}
        <p>Error: { err.message }</p>
    {/await}
</main>