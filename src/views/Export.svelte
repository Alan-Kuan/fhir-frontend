<main>
    <PageTitle>Bulk Export</PageTitle>

    <form on:submit|preventDefault={onSubmit}>
        <div class="mt-4 w-40">
            <Input label="Deidentified Export" bind:value={enable_deidentified} type="checkbox" />
        </div>
        <div class="mt-4">
            <Input label="Container Name" bind:value={container} />
        </div>
        <div class="mt-4">
            <Input label="Type" bind:value={type} />
        </div>
        <div class="mt-4">
            <Input label="Since" bind:value={since} />
        </div>
        {#if enable_deidentified}
        <div class="mt-4">
            <Input label="Anonymization Config" bind:value={anonym_config} />
        </div>
        <div class="mt-4">
            <Input label="Anonymization Config Etag" bind:value={anonym_config_etag} />
        </div>
        {/if}
        <div class="mt-4">
            <SubmitButton btn_size="btn-sm" />
        </div>
    </form>
</main>

<script>
    import PageTitle from '$components/UI/PageTitle.svelte'
    import Input from '$components/UI/Input.svelte'
    import SubmitButton from '$components/UI/SubmitButton.svelte'
    import { exportData } from '$apis/Export'

    let enable_deidentified = false
    let container = ''
    let type = ''
    let since = ''
    let anonym_config = ''
    let anonym_config_etag = ''

    function onSubmit() {
        if (enable_deidentified) {
            if (anonym_config.length === 0 || anonym_config_etag.length === 0) {
                alert('Anonymization Config and Anonymization Config Etag are requried!')
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