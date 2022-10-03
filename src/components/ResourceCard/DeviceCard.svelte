<BaseCard icon="akar-icons:laptop-device">
    <CardItem
        label="ID"
        value={ data.id }
    />
    {#if data.identifier }
    <CardList label="Identifier">
        {#each data.identifier as ident }
        <CardItem
            label={ ident.system }
            value={ ident.value }
        />
        {/each}
    </CardList>
    {/if}
    <CardItem
        label="Patient"
        value={ data.patient.reference }
    />
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'

    export let data
</script>