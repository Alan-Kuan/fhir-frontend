<script>
    import { Router, Route } from 'svelte-routing'
    import HomeView from '$views/Home.svelte'
    import PatientView from '$views/Patient.svelte'

    export let url = '';
</script>

<Router {url}>
    <div>
        <Route path="/" component={HomeView} />
        <Route path="patient" component={PatientView} />
    </div>
</Router>