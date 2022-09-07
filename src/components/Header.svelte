<script>
    import { Link } from 'svelte-navigator'
    const site_name = import.meta.env.VITE_SITE_NAME
</script>

<main>
    <header>
        <Link to="/">
            <h1>{ site_name }</h1>
        </Link>
    </header>
</main>

<style>
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

    h1 {
        color: white;
    }
</style>