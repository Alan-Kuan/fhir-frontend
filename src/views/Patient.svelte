<script>
    import Header from '$components/Header.svelte'
    import PatientList from '$components/PatientList.svelte'
</script>

<main>
    <Header />
    <div class="content">
        <h2>Patient List</h2>
        <PatientList />
    </div>
</main>

<style>
    .content {
        margin-top: 5rem;
        padding: 0 10rem;
    }
</style>