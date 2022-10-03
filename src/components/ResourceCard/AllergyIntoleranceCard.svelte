<BaseCard icon="mdi:flower-pollen-outline">
    <CardItem
        label="ID"
        value={data.id}
    />
    <CardItem
        label="Code"
        value={data.code.coding[0].display}
    />
    <CardItem
        label="Category"
        value={category}
    />
    <CardItem
        label="Criticality"
        value={data.criticality}
    />
    <CardItem
        label="Verification Status"
        value={data.verificationStatus.coding[0].display}
    />
    <CardItem
        label="Last Occurrence"
        value={data.lastOccurrence}
    />
    <CardItem
        label="Patient"
        value={data.patient.reference}
    />
    <CardItem
        label="Recorder"
        value={data.recorder.reference}
    />
    <CardItem
        label="Recorded Date"
        value={data.recordedDate}
    />
    <CardList label="Note">
        {#each data.note as note}
        <div>{note.text}</div>
        {/each}
    </CardList>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'
    import CardList from '$components/UI/CardList.svelte'

    $: category = data.category.join(',')

    export let data
</script>