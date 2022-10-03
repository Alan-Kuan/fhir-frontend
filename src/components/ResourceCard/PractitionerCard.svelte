<BaseCard icon="fa6-solid:user-doctor">
    <CardItem
        label="ID"
        value={data.id}
    />
    <CardItem
        label="Name"
        value={name}
    />
    <CardList label="Qualification">
        {#each data.qualification as qualification}
        <CardItem
            label={qualification.issuer.display}
            value={`${qualification.code.text} (${qualification.period.start})`}
        />
        {/each}
    </CardList>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'

    $: name = data.name ? `${data.name[0].given[0]} ${data.name[0].family}` : 'Unknown'

    export let data
</script>