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
        border: 1px solid darkgray;
        border-radius: 10px;
        text-align: center;
        transition: background-color 1s;
    }
    .block :global(.icon) {
        font-size: 6rem;
        color: #555555;
        transition: color .5s;
    }
    .block .title {
        font-weight: bold;
        color: #555555;
        transition: color .5s;
    }
    .block:hover {
        background: var(--site-main-color);
    }
    .block:hover :global(.icon),
    .block:hover .title {
        color: var(--site-bg);
    }
</style>