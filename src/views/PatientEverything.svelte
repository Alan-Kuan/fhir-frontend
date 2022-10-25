<main>
    <h2>Patient Everything</h2>

    <form on:submit|preventDefault={onSubmit}>
        <Input label="Patient ID" bind:value={patient_id} />
        <button type="submit">Submit</button>
    </form>

    {#if ready}
    <ResourceList get_resources={get_resources} />
    {/if}
</main>

<script>
    import ResourceList from '$components/ResourceList.svelte'
    import Input from '$components/UI/Input.svelte'
    import { getPatientEverything } from '$apis/Resource'

    let patient_id = ''
    let ready = false
    let get_resources

    function onSubmit() {
        ready = true
        get_resources = getPatientEverything(patient_id)
    }
</script>

<style>
    form {
        margin-bottom: 2rem;
    }
</style>