<BaseCard
  data={data}
  icon="mdi:patient"
>
    <div slot="content">
        <CardItem label="ID" value={data.id} />
        <CardItem label="Name" value={name} />
        <CardItem label="Gender" value={gender} />
        <CardItem label="Birth Date" value={birth_date} />
        <CardItem label="Speaking Language" value={language} />
    </div>
</BaseCard>

<script>
    import BaseCard from '$components/ResourceCard/BaseCard.svelte'
    import CardItem from '$components/UI/CardItem.svelte'

    export let data

    $: name = data.name ? (data.name[0].given + ' ' + data.name[0].family) : 'Unknown'
    $: gender = data.gender ?? 'Unknown'
    $: birth_date = data.birthDate ?? 'Unknown'
    $: language = data.communication ? data.communication[0].language.text : 'Unknown'
</script>