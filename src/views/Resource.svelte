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

    $: resource_type = resources[selected].text

    let selected = 0
    let resources = [
        {
            "text": "Patient",
            "value": 0
        },
        {
            "text": "RelatedPerson",
            "value": 1
        },
        {
            "text": "CarePlan",
            "value": 2
        },
        {
            "text": "Procedure",
            "value": 3
        },
        {
            "text": "Device",
            "value": 4
        }
    ]
</script>

<style>
    main {
        width: 70%;
        padding-bottom: 2rem;
    }
</style>