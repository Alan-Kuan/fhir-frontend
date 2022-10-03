<main>
    <Select
        bind:selected={selected}
        items={resources}
        width="10rem"
    />
    <h2>List of {resources[selected].text}:</h2>
    <ResourceList type={resources[selected].text} />
</main>

<script>
    import ResourceList from '$components/ResourceList.svelte'
    import Select from '$components/Select.svelte'

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
    }
</style>