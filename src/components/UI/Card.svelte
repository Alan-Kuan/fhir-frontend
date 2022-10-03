<div class="card">
    <slot></slot>
</div>

<style>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        margin-bottom: 1rem;
        box-shadow: 1px 1px 5px gray;
    }
</style>