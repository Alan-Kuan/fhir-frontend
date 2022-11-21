<div>
    {#await get_resources}
        <div class="flex justify-center mt-10">
            <progress class="progress w-9/12" />
        </div>
    {:then resources} 
        {#each resources as resource}
            <svelte:component
                this={getResourceCard(resource.resource.resourceType)}
                data={resource.resource}
            />
        {/each}
    {:catch err}
        <div class="alert alert-error shadow-lg justify-start">
            <Icon
              icon="material-symbols:error-rounded"
              class="text-2xl"
            />
            <span>Error: { err.message }</span>
        </div>
    {/await}
</div>

<script>
    import { getResourceCard } from '$apis/ResourceCard'
    import Icon from '@iconify/svelte'

    export let get_resources
</script>