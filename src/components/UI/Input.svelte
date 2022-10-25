{#if type === 'text'}
<label>
    {label}
    <input type="text" bind:value={value} />
</label>
{:else if type === 'password'}
<label>
    {label}
    <input type="password" bind:value={value} />
</label>
{:else if type === 'checkbox'}
<label>
    <input type="checkbox" bind:checked={value} />
    {label}
</label>
{/if}

<script>
    export let label
    export let value
    export let type = 'text'
</script>