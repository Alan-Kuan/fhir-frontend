<main>
    <PageTitle>Patient Everything</PageTitle>

    <form on:submit|preventDefault={onSubmit}>
        <div class="mt-4">
            <Input label="Patient ID" bind:value={patient_id} />
        </div>
        <div class="mt-4">
            <button
              class="btn btn-success btn-sm text-white font-normal normal-case"
              type="submit"
            >
                Submit
            </button>
        </div>
    </form>

    {#if ready}
    <ResourceList get_resources={get_resources} />
    {/if}
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
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