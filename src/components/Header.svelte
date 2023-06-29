{#if is_home}
    <header class="home">
        <h1
          class="
            pt-12 leading-tight
            text-black text-center text-6xl"
        >
            { site_name }
        </h1>
        <div
          class="
            w-3/4 mx-auto
            border-b-8 border-solid gradient-border"
        ></div>
        <button on:click={login}>
            login
        </button>
    </header>
{:else}
    <header
      class="other
        w-full h-40 p-8 box-border
        flex items-center
        bg-gradient-to-tr from-orange-400 to-rose-600"
    >
        <Link to="/" class="no-underline">
            <h1 class="text-white text-6xl">
                { site_name }
            </h1>
        </Link>
    </header>
{/if}

<script>
    import { Link, useLocation } from 'svelte-navigator'
    import { login } from '$apis/Auth.js'
    const site_name = import.meta.env.VITE_SITE_NAME
    const location = useLocation()
    $: is_home = $location.pathname === '/'
</script>

<style>
    .gradient-border {
        border-image: linear-gradient(45deg, #fb923c, #e11d48) 1;
    }
</style>
