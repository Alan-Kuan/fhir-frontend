<main>
    <h2>Authentication Config</h2>
    <form on:submit|preventDefault={onSubmit}>
        <div class="row">
            <span>帳號</span>
            <input type="text" bind:value={account} />
        </div>
        <div class="row">
            <span>密碼</span>
            <input type="password" bind:value={password} />
        </div>
        <div class="row">
            <button type="submit">確定</button>
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
        alert('已儲存帳號密碼！')
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