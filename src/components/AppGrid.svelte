<div class="container">
    {#each entries as entry}
        <AppGridBlock
            path={entry.path}
            icon={entry.icon}
            title={entry.title}
        />
    {/each}
</div>

<script>
    import AppGridBlock from './AppGridBlock.svelte'

    let entries = [
        {
            path: 'resource',
            icon: 'mdi:cube-outline',
            title: 'Resources',
        },
        {
            path: 'patient-everything',
            icon: 'mdi:patient',
            title: 'Patient Everything',
        },
        {
            path: 'export',
            icon: 'mdi-export-variant',
            title: 'Bulk Export',
        },
        {
            path: 'auth',
            icon: 'mdi:gear',
            title: 'Authentication Config',
        }
    ]
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 5rem;
        padding: 0 5%;
        box-sizing: border-box;
    }
    .container :global(.link) {
        color: white;
        text-decoration: none;
    }
</style>