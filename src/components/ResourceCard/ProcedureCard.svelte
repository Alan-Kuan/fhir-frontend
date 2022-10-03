<BaseCard
    data={data}
    icon="fa-solid:procedures"
>
    <div slot="content">
        <CardItem
            label="ID"
            value={ data.id }
        />
        <CardItem
            label="Code"
            value={ data.code.text }
        />
        <CardItem
            label="Status"
            value={ data.status }
        />
        <CardItem
            label="Subject"
            value={ data.subject.reference }
        />
        {#if data.followUp }
        <CardList label="Follow Up">
            {#each data.followUp as follow_up }
            <div>{ follow_up.text }</div>
            {/each}
        </CardList>
        {/if}
        {#if data.note }
        <CardList label="Note">
            {#each data.note as note }
            <div>{ note.text }</div>
            {/each}
        </CardList>
        {/if}
    </div>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'

    export let data
</script>