<div class="card card-bordered w-1/2">
    <div class="card-body">
        <h2 class="card-title underline">
            Basic Patient Information
        </h2>
        <form
          class="
            mt-2
            grid auto-rows-auto gap-y-2"
          on:submit|preventDefault={onSubmit}
        >
            <Input
              label="First Name"
              bind:value={first_name}
              label_width="w-4/12"
              input_width="w-8/12"
            />
            <Input
              label="Last Name"
              bind:value={last_name}
              label_width="w-4/12"
              input_width="w-8/12"
            />
            <Select
              label="Gender"
              bind:selected={gender}
              items={genders}
              select_size="select-sm"
              label_width="w-4/12"
              select_width="w-8/12"
            />
            <Input
              label="Birthdate"
              bind:value={birthdate}
              type="date"
              label_width="w-4/12"
              input_width="w-8/12"
            />
            <Input
              label="Contact Number"
              bind:value={contact}
              label_width="w-4/12"
              input_width="w-8/12"
            />
            <Input
              label="Spoken Language"
              bind:value={language}
              label_width="w-4/12"
              input_width="w-8/12"
            />
            <SubmitButton />
        </form>
    </div>
</div>

<script>
    import Input from '$components/UI/Input.svelte'
    import Select from '$components/UI/Select.svelte'
    import SubmitButton from '$components/UI/SubmitButton.svelte'

    let first_name = ''
    let last_name = ''
    let gender = 0
    let birthdate = null
    let contact = ''
    let language = ''

    let genders = ['Male', 'Female', 'Other']

    function onSubmit() {

    }
</script>