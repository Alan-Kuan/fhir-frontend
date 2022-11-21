<button
  class="
    btn btn-success {btn_size}
    text-white font-normal normal-case
    hover:opacity-70"
  type="submit"
>
    <Icon
      icon="ic:round-send"
      class="text-lg"
    />
    Submit
</button>

<script>
    import Icon from '@iconify/svelte'

    export let btn_size = 'btn-md'
</script>