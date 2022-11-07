<div class="wrapper relative inline-block">
    <select
      class="
        px-4 py-2 bg-white
        border border-solid border-black rounded-2xl
        appearance-none cursor-pointer"
      style="width: {width};"
      bind:value={selected}
    >
        {#each items as item, idx}
        <option value={item.value ?? idx}>
            {item.text ?? item}
        </option>
        {/each}
    </select>
</div>

<script>
    export let selected
    export let items
    export let width
</script>

<style>
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
</style>