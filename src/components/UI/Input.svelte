<div class="form-control">
    {#if type === 'text'}
    <label class="input-group input-group-sm">
        <span class="{label_width}">{label}</span>
        <input
          class="input input-sm input-bordered {input_width}"
          type="text"
          bind:value={value}
        />
    </label>

    {:else if type === 'password'}
    <label class="input-group input-group-sm">
        <span class="{label_width}">{label}</span>
        <input
          class="input input-sm input-bordered {input_width}"
          type="password"
          bind:value={value}
        />
    </label>

    {:else if type === 'date'}
    <div class="input-group input-group-sm">
        <span class="{label_width}">{label}</span>
        <SveltyPicker
            inputClasses="input input-sm input-bordered {input_width}"
            format="yyyy-mm-dd"
            bind:value={value}
        />
    </div>

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
</div>

<script>
    import SveltyPicker from 'svelty-picker'

    export let label
    export let value
    export let type = 'text'
    export let label_width = ''
    export let input_width = ''

    if (type === 'date')
        value = new Date().toISOString().split('T')[0]
</script>