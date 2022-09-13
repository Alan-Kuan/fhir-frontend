{#if is_home}
    <h1 class="home_title">{ site_name }</h1>
{:else}
    <header>
        <Link to="/">
            <h1>{ site_name }</h1>
        </Link>
    </header>
{/if}

<script>
    import { Link, useLocation } from 'svelte-navigator'
    const site_name = import.meta.env.VITE_SITE_NAME
    const location = useLocation()
    $: is_home = $location.pathname === '/'
</script>

<style>
    h1 {
        color: white;
    }
    .home_title {
        margin-top: 5rem;
        text-align: center;
        font-size: 6rem;
    }

    header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding: 2rem;
        box-sizing: border-box;
        background: #323232;
    }
    header :global(a) {
        text-decoration: none;
    }
</style>