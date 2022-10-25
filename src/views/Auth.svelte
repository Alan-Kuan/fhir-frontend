<main>
    <h2>Authentication Config</h2>
    <form on:submit|preventDefault={onSubmit}>
        <div class="row">
            <Input label="Username" bind:value={account} />
        </div>
        <div class="row">
            <Input label="Password" bind:value={password} type="password" />
        </div>
        <div class="row">
            <button type="submit">Submit</button>
        </div>
    </form>
</main>

<script>
    import Input from '$components/UI/Input.svelte'

    let account = localStorage.getItem('account') ?? ''
    let password = localStorage.getItem('password') ?? ''

    function onSubmit() {
        localStorage.setItem('account', account)
        localStorage.setItem('password', password)
        location.reload()
        alert('The account was saved！')
    }
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    .row {
        margin-top: 1rem;
    }
</style>