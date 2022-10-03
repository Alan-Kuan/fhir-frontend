<Card>
    <div class="content">
        {#if display_raw || !$$slots.content}
            <pre>{ JSON.stringify(data, null, 2) }</pre>
        {:else}
            <slot name="content"></slot>
        {/if}
    </div>

    {#if $$slots.content}
    <button
        class="switch"
        on:click={onClickSwitch}
    >
        { switch_text }
    </button>
    {/if}

    <div class="icon">
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

<style>
    .content {
        width: 100%;
        padding-right: 4rem;
        box-sizing: border-box;
    }
    pre {
        overflow-x: scroll;
    }

    .switch {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        border: 1px solid gray;
        background-color: transparent;
        color: black;
    }

    .icon {
        position: absolute;
        right: 0.2rem;
        bottom: 0.5rem;
        z-index: -1;
        color: gray;
        font-size: 4rem;
    }
</style>