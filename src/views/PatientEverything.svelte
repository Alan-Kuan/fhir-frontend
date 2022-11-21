<main>
    <PageTitle>Patient Everything</PageTitle>

    <form on:submit|preventDefault={onSubmit}>
        <label class="input-group input-group-sm">
            <span class="">Patient ID</span>
            <input
              class="input input-sm input-bordered"
              type="text"
              bind:value={patient_id}
            />
            <button
              class="
                btn btn-success btn-sm
                text-white font-normal normal-case
                hover:opacity-70"
              type="submit"
            >
                Search
            </button>
        </label>
    </form>

    {#if ready}
    <div class="mt-4">
        <ResourceList get_resources={get_resources} />
    </div>
    {/if}
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
    import ResourceList from '$components/ResourceList.svelte'
    import { getPatientEverything } from '$apis/Resource'

    let patient_id = ''
    let ready = false
    let get_resources

    function onSubmit() {
        ready = true
        get_resources = getPatientEverything(patient_id)
    }
</script>