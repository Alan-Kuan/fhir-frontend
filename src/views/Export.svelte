<main>
    <PageTitle>Bulk Export</PageTitle>

    <Form
      card_classes="w-1/2"
      on_submit={onSubmit}
    >
        <Input
          label="Deidentified Export"
          bind:value={enable_deidentified}
          type="checkbox"
        />
        <Input
          label="Container Name"
          bind:value={container}
          label_width="w-4/12"
          input_width="w-8/12"
        />
        <Input
          label="Type"
          bind:value={type}
          label_width="w-4/12"
          input_width="w-8/12"
        />
        <Input
          label="Since"
          bind:value={since}
          label_width="w-4/12"
          input_width="w-8/12"
        />

        {#if enable_deidentified}
        <Input
          label="Anonymization Config"
          bind:value={anonym_config}
          label_width="w-6/12"
          input_width="w-6/12"
        />
        <Input
          label="Anonymization Config Etag"
          bind:value={anonym_config_etag}
          label_width="w-6/12"
          input_width="w-6/12"
        />
        {/if}

        <SubmitButton />
    </Form>
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
    import Input from '$components/UI/Input.svelte'
    import SubmitButton from '$components/UI/SubmitButton.svelte'
    import Form from '$components/UI/Form.svelte'
    import { exportData } from '$apis/Export'

    let enable_deidentified = false
    let container = ''
    let type = ''
    let since = ''
    let anonym_config = ''
    let anonym_config_etag = ''

    function onSubmit() {
        if (enable_deidentified) {
            if (anonym_config.length === 0) {
                alert('Anonymization Config is requried!')
                return
            }
        }
        exportData(container, type, since, anonym_config, anonym_config_etag)
            .then(ok => {
                if (ok)
                    alert('匯出請求已送出')
                else
                    alert('發生未知錯誤')
            })
    }
</script>