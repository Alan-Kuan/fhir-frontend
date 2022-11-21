<div class="flex mt-1">
    <div
      class="
        flex items-center
        w-3/12 mr-5 pl-2 py-1
        bg-info text-white"
    >
        <span>{ label }</span>
    </div>
    <div class="flex flex-col w-8/12">
        <slot></slot>
    </div>
</div>

<script>
    export let label
</script>