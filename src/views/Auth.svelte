<main>
    <PageTitle>Authentication Config</PageTitle>

    <Form
      card_classes="w-1/2"
      on_submit={onSubmit}
    >
        <Input
          label="Username"
          bind:value={account}
          label_width="w-4/12"
          input_width="w-8/12"
        />
        <Input
          label="Password"
          bind:value={password}
          type="password"
          label_width="w-4/12"
          input_width="w-8/12"
        />
        <SubmitButton
          icon="material-symbols:save"
          text="Save"
          btn_size="btn-sm"
        />
    </Form>
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
    import Input from '$components/UI/Input.svelte'
    import SubmitButton from '$components/UI/SubmitButton.svelte'
    import Form from '$components/UI/Form.svelte'

    let account = localStorage.getItem('account') ?? ''
    let password = localStorage.getItem('password') ?? ''

    function onSubmit() {
        localStorage.setItem('account', account)
        localStorage.setItem('password', password)
        location.reload()
        alert('The account was saved！')
    }
</script>