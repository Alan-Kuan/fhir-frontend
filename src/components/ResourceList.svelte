<div class="pb-10">
    {#await get_resources}
        <div class="flex justify-center mt-10">
            <progress class="progress w-9/12" />
        </div>
    {:then resources} 
        {#if resources}
            {#each resources as resource}
                <svelte:component
                  this={getResourceCard(resource.resource.resourceType)}
                  data={resource.resource}
                />
            {/each}
        {:else}
            <div class="flex flex-col items-center">
                <Icon
                  icon="tabler:3d-cube-sphere"
                  class="text-8xl text-gray-500"
                />
                <div class="text-xl text-gray-500 font-bold">
                    There's no this kind of resource.
                </div>
            </div>
        {/if}
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