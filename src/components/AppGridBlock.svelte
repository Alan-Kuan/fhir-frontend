<Link to={path} class="no-underline">
    <div
      class="block
        m-1 py-2 rounded-xl text-center
        flex flex-col justify-center items-center
        transition-colors duration-500
        bg-secondary hover:bg-primary"
    >
        <Icon
          icon={icon}
          class="text-8xl"
        />
        
        <div class="title font-bold">
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