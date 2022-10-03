<main>
    <h2>Authentication Config</h2>
    <form on:submit|preventDefault={onSubmit}>
        <div class="row">
            <span>Username</span>
            <input type="text" bind:value={account} />
        </div>
        <div class="row">
            <span>Password</span>
            <input type="password" bind:value={password} />
        </div>
        <div class="row">
            <button type="submit">Submit</button>
        </div>
    </form>
</main>

<script>
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