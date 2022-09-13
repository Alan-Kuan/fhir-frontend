<div class="card">
    <div>
        <span>Name | </span>
        <span>{ data.resource.name[0].text }</span>
    </div>
    <div>
        <span>Gender | </span>
        <span>{ data.resource.gender }</span>
    </div>
    <div>
        <span>Birth Date | </span>
        <span>{ data.resource.birthDate }</span>
    </div>
</div>

<script>
    export let data;
</script>

<style>
    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        margin-bottom: 1rem;
        border: 1px solid white;
        border-radius: 10px;
    }
</style>