<Card>
    <div class="w-full pr-16 border-box">
        {#if display_raw || !$$slots.content}
        <pre class="overflow-x-scroll">{ JSON.stringify(data, null, 2) }</pre>
        {:else}
        <slot name="content"></slot>
        {/if}
    </div>

    {#if $$slots.content}
    <button
      class="
        btn btn-outline btn-sm
        absolute top-2 right-2
        text-black hover:text-white font-normal normal-case"
      on:click={onClickSwitch}
    >
        { switch_text }
    </button>
    {/if}

    <div
      class="
        absolute right-1 bottom-2
        text-6xl text-gray-500 z-0"
    >
        <Icon icon={icon} />
    </div>
</Card>

<script>
    import Card from '$components/UI/Card.svelte'
    import Icon from '@iconify/svelte'

    $: switch_text = display_raw ? 'Pretty' : 'Raw'

    let display_raw = false

    export let data
    export let icon = 'akar-icons:info'

    function onClickSwitch() {
        display_raw = !display_raw
    }
</script>