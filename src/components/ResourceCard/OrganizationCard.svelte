<BaseCard icon="clarity:organization-line">
    <CardItem
        label="ID"
        value={data.id}
    />
    <CardItem
        label="Name"
        value={data.name}
    />
    <CardList label="Telecom">
        {#each data.telecom as telecom}
        <CardItem
            label={telecom.system}
            value={telecom.value}
        />
        {/each}
    </CardList>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'

    export let data
</script>