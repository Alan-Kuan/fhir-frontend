<main class="w-3/4 mb-8">
    <div class="mb-4">
        <Select
          bind:selected={selected}
          items={resources}
          width="10rem"
        />
    </div>
    <PageTitle>List of {resource_type}:</PageTitle>
    <ResourceList get_resources={getResources(resource_type)} />
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
    import ResourceList from '$components/ResourceList.svelte'
    import Select from '$components/UI/Select.svelte'
    import { getResources } from '$apis/Resource'

    $: resource_type = resources[selected]

    let selected = 0
    let resources = [
        'Patient',
        'RelatedPerson',
        'Practitioner',
        'Organization',
        'CarePlan',
        'Procedure',
        'Device',
        'AllergyIntolerance',
    ]
</script>