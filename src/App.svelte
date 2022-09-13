<Router>
    <Header />
    <div class="content">
        <Route path="/" component={HomeView} />
        <Route path="patient" component={PatientView} />
        <Route path="auth" component={AuthView} />
    </div>
</Router>

<script>
    import { Router, Route } from 'svelte-navigator'
    import Header from '$components/Header.svelte'
    import HomeView from '$views/Home.svelte'
    import PatientView from '$views/Patient.svelte'
    import AuthView from '$views/Auth.svelte'
</script>

<style>
  .content {
    margin-top: 3rem;
    padding: 0 10rem;
  }
</style>