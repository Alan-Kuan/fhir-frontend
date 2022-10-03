<Card>
    <div class="content">
        <slot></slot>
    </div>
    <div class="icon">
        <Icon icon={icon} />
    </div>
</Card>

<script>
    import Card from '$components/UI/Card.svelte'
    import Icon from '@iconify/svelte'

    export let icon = 'akar-icons:info'
</script>

<style>
    .content {
        padding-right: 4rem;
    }

    .icon {
        position: absolute;
        right: 0.2rem;
        bottom: 0.5rem;
        z-index: -1;
        color: gray;
        font-size: 4rem;
    }
</style>