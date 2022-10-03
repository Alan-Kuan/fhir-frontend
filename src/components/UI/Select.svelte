<div class="wrapper">
    <select
        bind:value={selected}
        style="width: {width};"
    >
        {#each items as item, idx}
            <option value={item.value ?? idx}>
                {item.text ?? item}
            </option>
        {/each}
    </select>
</div>

<script>
    export let selected;
    export let items;
    export let width;
</script>

<style>
    .wrapper {
        display: inline-block;
        position: relative;
    }
    .wrapper::after {
        content: '▼';
        position: absolute;
        top: 50%;
        right: 0.5rem;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .wrapper:hover select {
        background-color: #c2c2c2;
    }
    select {
        padding: 0.5rem 1rem;
        border-radius: 15px;
        appearance: none;
        cursor: pointer;
    }
</style>