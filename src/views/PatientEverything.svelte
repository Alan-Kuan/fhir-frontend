<main>
    <PageTitle>Patient Everything</PageTitle>

    <form
      class="mb-8"
      on:submit|preventDefault={onSubmit}
    >
        <Input label="Patient ID" bind:value={patient_id} />
        <button
          class="btn btn-success btn-sm text-white font-normal normal-case"
          type="submit"
        >
            Submit
        </button>
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