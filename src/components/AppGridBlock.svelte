<Link to={path} class="link">
    <div class="block">
        <Icon icon={icon} class="icon" />
        <div class="title">{title}</div>
    </div>
</Link>

<script>
    import { Link } from 'svelte-navigator'
    import Icon from '@iconify/svelte'

    export let path
    export let icon
    export let title
</script>

<style>
    .block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 15rem;
        height: 10rem;
        margin: 0 1rem;
        border: 1px solid white;
        border-radius: 10px;
        text-align: center;
        transition: background-color 1s;
    }
    .block :global(.icon) {
        font-size: 6rem;
        transition: color 1s;
    }
    .block .title {
        font-weight: bold;
        transition: color 1s;
    }
    .block:hover {
        background: white;
    }
    .block:hover :global(.icon),
    .block:hover .title {
        color: var(--site-bg);
    }
</style>