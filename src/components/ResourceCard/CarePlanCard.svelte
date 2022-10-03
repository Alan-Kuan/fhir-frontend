<BaseCard icon="healthicons:coronary-care-unit">
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
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'

    export let data
</script>