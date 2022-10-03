<div>
    {#await getResources(type)}
        <p>Waiting...</p>
    {:then resources} 
        {#each resources as resource}
            <svelte:component
                this={getResourceCard(type)}
                data={resource.resource}
            />
        {/each}
    {:catch err}
        <p>Error: { err.message }</p>
    {/await}
</div>

<script>
    import { getResources } from '$apis/Resource'
    import { getResourceCard } from '$apis/ResourceCard'

    export let type;
</script>