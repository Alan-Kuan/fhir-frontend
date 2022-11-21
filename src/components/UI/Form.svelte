<div class="card card-bordered {card_classes}">
    <div class="card-body">
        {#if title}
        <h2 class="card-title mb-2 underline">
            {title}
        </h2>
        {/if}

        <form
          class="grid auto-rows-auto gap-y-2"
          on:submit|preventDefault={on_submit}
        >
            <slot></slot>
        </form>
    </div>
</div>

<script>
    export let title = ''
    export let card_classes = ''
    export let on_submit
</script>