<div>
    {#await get_resources}
        <p>{waiting_msg}</p>
    {:then resources} 
        {#each resources as resource}
            <svelte:component
                this={getResourceCard(resource.resource.resourceType)}
                data={resource.resource}
            />
        {/each}
    {:catch err}
        <p>Error: { err.message }</p>
    {/await}
</div>

<script>
    import { getResourceCard } from '$apis/ResourceCard'

    export let get_resources
    export let waiting_msg = 'Waiting...'
</script>