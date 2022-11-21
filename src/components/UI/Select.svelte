<label class="input-group input-group-sm">
    <span class="{label_width}">{label}</span>
    <select
      class="select select-bordered {select_size} {select_width}"
      bind:value={selected}
    >
        {#each items as item, idx}
        <option value={item.value ?? idx}>
            {item.text ?? item}
        </option>
        {/each}
    </select>
</label>

<script>
    export let label
    export let selected
    export let items
    export let select_size = 'select-md'
    export let label_width = ''
    export let select_width = ''
</script>