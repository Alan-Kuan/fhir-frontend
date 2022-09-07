<script>
    import { Link } from 'svelte-navigator'
    import Icon from '@iconify/svelte'
</script>

<main>
    <div class="container">
        <Link to="patient" class="link">
            <div class="block">
                <Icon icon="mdi:account-injury-outline" class="icon" />
                <div class="title">Patient List</div>
            </div>
        </Link>
    </div>
</main>

<style>
    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 5rem;
        padding: 0 5%;
        box-sizing: border-box;
    }
    .container :global(.link) {
        color: white;
        text-decoration: none;
    }

    .block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 15rem;
        height: 10rem;
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