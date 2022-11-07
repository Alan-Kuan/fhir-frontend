<Router>
    <Header />
    <div class="mt-12 px-40">
        {#each routes as route}
        <Route path={route.path} primary={false}>
            <svelte:component this={route.component} />
        </Route>
        {/each}
    </div>
</Router>

<script>
    import { Router, Route } from 'svelte-navigator'
    import Header from '$components/Header.svelte'
    import HomeView from '$views/Home.svelte'
    import ResourceView from '$views/Resource.svelte'
    import PatientEverythingView from '$views/PatientEverything.svelte'
    import ExportView from '$views/Export.svelte'
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
            path: 'export',
            component: ExportView,
        },
        {
            path: 'auth',
            component: AuthView,
        },
    ]
</script>