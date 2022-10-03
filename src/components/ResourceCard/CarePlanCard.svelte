<Card>
    <CardItem
        label="ID"
        value={ data.id }
    />
    <CardItem
        label="Title"
        value={ data.title }
    />
    {#if data.description }
    <CardItem
        label="Description"
        value={ data.description }
    />
    {/if}
    <CardItem
        label="Status"
        value={ data.status ?? 'Unknown' }
    />
    <CardItem
        label="Subject"
        value={ data.subject.reference }
    />
</Card>

<script>
    import Card from '$components/UI/Card.svelte'
    import CardItem from '$components/UI/CardItem.svelte'

    export let data
</script>