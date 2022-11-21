<main>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {#each entries as entry}
        <AppGridBlock
          path={entry.path}
          icon={entry.icon}
          title={entry.title}
        />
        {/each}
    </div>
</main>

<script>
    import AppGridBlock from '$components/AppGridBlock.svelte'

    let entries = [
        {
            path: 'resource',
            icon: 'mdi:cube-outline',
            title: 'Resources',
        },
        {
            path: 'medical-record',
            icon: 'mdi:clipboard-pulse-outline',
            title: 'Medical Record',
        },
        {
            path: 'patient-everything',
            icon: 'material-symbols:all-inbox-rounded',
            title: 'Patient Everything',
        },
        {
            path: 'export',
            icon: 'mdi:export-variant',
            title: 'Bulk Export',
        },
        {
            path: 'auth',
            icon: 'mdi:gear',
            title: 'Authentication Config',
        }
    ]
</script>