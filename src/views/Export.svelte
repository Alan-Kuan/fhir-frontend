<main>
    <h2>Bulk Export</h2>

    <form on:submit|preventDefault={onSubmit}>
        <div class="row">
            <Input label="Deidentified Export" bind:value={enable_deidentified} type="checkbox" />
        </div>
        <div class="row">
            <Input label="Container Name" bind:value={container} />
        </div>
        <div class="row">
            <Input label="Type" bind:value={type} />
        </div>
        <div class="row">
            <Input label="Since" bind:value={since} />
        </div>
        {#if enable_deidentified}
        <div class="row">
            <Input label="Anonymization Config" bind:value={anonym_config} />
        </div>
        <div class="row">
            <Input label="Anonymization Config Etag" bind:value={anonym_config_etag} />
        </div>
        {/if}
        <div class="row">
            <button type="submit">Submit</button>
        </div>
    </form>
</main>

<script>
    import Input from '$components/UI/Input.svelte'
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

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    .row {
        margin-top: 1rem;
    }
</style>