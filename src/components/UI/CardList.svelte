<div>
    <span>{ label }:</span>
    <div class="list">
        <slot></slot>
    </div>
</div>

<script>
    export let label
</script>

<style>
    .list {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }
</style>