<BaseCard
    data={data}
    icon="carbon:person"
>
    <div slot="content">
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
            label="Relationship"
            value={ data.relationship ? (data.relationship[0].text ?? 'Unknown') : 'Unknown' }
        />
        {#if data.telecom }
        <CardList label="Contact Method">
            {#each data.telecom as telecom }
            <CardListItem
                label={ telecom.system ? `${telecom.system} (${telecom.use})` : 'Unknown System' }
                value={ telecom.value ?? 'Unknown' }
            />
            {/each}
        </CardList>
        {/if}
        <CardItem
            label="Related Patient"
            value={ data.patient.reference }
        />
    </div>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'
    import CardListItem from '$components/UI/CardListItem.svelte'

    export let data
</script>