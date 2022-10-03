<main>
    <Select
        bind:selected={selected}
        items={resources}
        width="10rem"
    />
    <h2>List of {resource_type}:</h2>
    <ResourceList get_resources={getResources(resource_type)} />
</main>

<script>
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

<style>
    main {
        width: 70%;
        padding-bottom: 2rem;
    }
</style>