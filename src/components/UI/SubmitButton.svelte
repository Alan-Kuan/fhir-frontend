<button
  class="
    btn btn-success {btn_size}
    text-white font-normal normal-case
    hover:opacity-70"
  type="submit"
>
    <Icon
      icon={icon}
      class="text-lg"
    />
    {text}
</button>

<script>
    import Icon from '@iconify/svelte'

    export let icon = 'ic:round-send'
    export let text = 'Submit'
    export let btn_size = 'btn-md'
</script>