<BaseCard icon="mdi:patient">
    <CardItem
        label="ID"
        value={ data.id }
    />
    <CardItem
        label="Name"
        value={ data.name ? (data.name[0].text ?? 'Unknown') : 'Unknown' }
    />
    <CardItem
        label="Gender"
        value={ data.gender ?? 'Unknown' }
    />
    <CardItem
        label="Birth Date"
        value={ data.birthDate ?? 'Unknown' }
    />
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'

    export let data
</script>