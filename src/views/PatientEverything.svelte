<main>
    <PageTitle>Patient Everything</PageTitle>

    {#if select_ready}
    <Select
        label="Patient"
        bind:selected={selected_patient}
        items={patient_select_items}
    />
    {/if}

    <div class="mt-4">
        <ResourceList get_resources={getPatientEverything(selected_patient)} />
    </div>
</main>

<script>
    import { onMount } from 'svelte'
    import PageTitle from '$components/UI/PageTitle.svelte'
    import Select from '$components/UI/Select.svelte'
    import ResourceList from '$components/ResourceList.svelte'
    import { getPatientEverything } from '$apis/Resource'
    import { getResources } from '$apis/Resource'

    let select_ready = false
    let patient_select_items
    let selected_patient

    onMount(async () => {
        const patients = await getResources('Patient')

        patient_select_items = patients.map(patient => {
            const id = patient.resource.id
            const name = patient.resource.name
            const display_name = name ? (name[0].given + ' ' + name[0].family) : 'Unknown'

            return {
                text: `${display_name} (${id})`,
                value: id
            }
        })

        select_ready = true
    });
</script>