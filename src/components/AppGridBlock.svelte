<Link to={path} class="no-underline">
    <div
      class="block
        mx-1 py-2 rounded-xl text-center
        flex flex-col justify-center items-center
        border border-solid border-gray-400
        transition-colors duration-1000
        bg-secondary hover:bg-primary"
    >
        <Icon
          icon={icon}
          class="icon text-neutral text-8xl transition-colors duration-200"
        />
        
        <div
          class="title text-neutral font-bold transition-colors duration-200"
        >
            {title}
        </div>
    </div>
</Link>

<script>
    import { Link } from 'svelte-navigator'
    import Icon from '@iconify/svelte'

    export let path
    export let icon
    export let title
</script>

<style>
    .block:hover :global(.icon),
    .block:hover .title {
        color: white;
    }
</style>