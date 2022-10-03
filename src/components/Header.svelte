{#if is_home}
    <header class="home">
        <h1>{ site_name }</h1>
        <div class="underline"></div>
    </header>
{:else}
    <header class="other">
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
    header.home h1 {
        padding-top: 5rem;
        text-align: center;
        font-size: 6rem;
        color: black;
    }
    header.home .underline {
        width: 75%;
        margin: 0 auto;
        border-bottom: 1rem solid var(--site-main-color);
    }

    header.other {
        display: flex;
        align-items: center;
        width: 100%;
        height: 10rem;
        padding: 2rem;
        box-sizing: border-box;
        background: var(--site-main-color);
    }
    header.other :global(a) {
        text-decoration: none;
    }
    header.other h1 {
        color: white;
    }
</style>