{#if type === 'text'}
<label class="input-group input-group-sm">
    <span>{label}</span>
    <input
      class="input input-sm input-bordered"
      type="text"
      bind:value={value}
    />
</label>

{:else if type === 'password'}
<label class="input-group input-group-sm">
    <span>{label}</span>
    <input
      class="input input-sm input-bordered"
      type="password"
      bind:value={value}
    />
</label>

{:else if type === 'checkbox'}
<label class="label cursor-pointer">
    <input
      class="checkbox checkbox-sm checkbox-primary"
      type="checkbox"
      bind:checked={value}
    />
    <span class="label-text">{label}</span>
</label>
{/if}

<script>
    export let label
    export let value
    export let type = 'text'
</script>