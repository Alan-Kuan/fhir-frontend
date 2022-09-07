<script>
  import AppGrid from '$components/AppGrid.svelte'

  const site_name = import.meta.env.VITE_SITE_NAME
</script>

<main>
  <h1>{ site_name }</h1>
  <AppGrid />
</main>

<style>
  h1 {
    margin-top: 5rem;
    text-align: center;
    font-size: 6rem;
  }
</style>
