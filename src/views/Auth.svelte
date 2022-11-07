<main>
    <PageTitle>Authentication Config</PageTitle>

    <form
      class="flex flex-col"
      on:submit|preventDefault={onSubmit}
    >
        <div class="mt-4">
            <Input label="Username" bind:value={account} />
        </div>
        <div class="mt-4">
            <Input label="Password" bind:value={password} type="password" />
        </div>
        <div class="mt-4">
            <button
              class="btn btn-success btn-sm text-white font-normal normal-case"
              type="submit"
            >
                Submit
            </button>
        </div>
    </form>
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
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