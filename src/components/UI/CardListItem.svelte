<div
  class="
    flex items-center
    my-1 w-full 
    border-solid border-b-2"
>
    {#if label}
    <div
      class="
        mr-5 my-1 px-2 py-1
        border rounded-2xl
        bg-accent text-white"
    >
        { label }
    </div>
    {/if}
    <div class="py-1">{ value }</div>
</div>

<script>
    export let label = ''
    export let value
</script>