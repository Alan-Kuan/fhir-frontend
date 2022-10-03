<Router>
    <Header />
    <div class="content">
        {#each routes as route}
        <Route path={route.path} component={route.component} />
        {/each}
    </div>
</Router>

<script>
    import { Router, Route } from 'svelte-navigator'
    import Header from '$components/Header.svelte'
    import HomeView from '$views/Home.svelte'
    import ResourceView from '$views/Resource.svelte'
    import PatientEverythingView from '$views/PatientEverything.svelte'
    import AuthView from '$views/Auth.svelte'

    let routes = [
      {
        path: '/',
        component: HomeView,
      },
      {
        path: 'resource',
        component: ResourceView,
      },
      {
        path: 'patient-everything',
        component: PatientEverythingView,
      },
      {
        path: 'auth',
        component: AuthView,
      },
    ]
</script>

<style>
  .content {
    margin-top: 3rem;
    padding: 0 10rem;
  }
</style>