<Form
  title="Basic Patient Information"
  card_classes="w-1/2"
  on_submit={onSubmit}
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
      label="Phone Number"
      bind:value={phone}
      label_width="w-5/12"
      input_width="w-7/12"
    />
    <Input
      label="Spoken Language"
      bind:value={language}
      label_width="w-5/12"
      input_width="w-7/12"
    />
    <SubmitButton />
</Form>

<script>
    import Input from '$components/UI/Input.svelte'
    import Select from '$components/UI/Select.svelte'
    import SubmitButton from '$components/UI/SubmitButton.svelte'
    import Form from '$components/UI/Form.svelte'
    import { addPatient } from '$apis/Patient'

    let first_name = ''
    let last_name = ''
    let gender = 'male'
    let birthdate = null
    let phone = ''
    let language = ''

    let genders = [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'famale' },
        { text: 'Other', value: 'other' }
    ]

    function reset() {
        first_name = ''
        last_name = ''
        gender = 'male'
        birthdate = null
        phone = ''
        language = ''
    }

    function onSubmit() {
        alert('Successfully submitted!')
        addPatient({
            first_name,
            last_name,
            gender,
            birthdate,
            phone,
            language,
        })
            .then(() => {
                alert('Successfully added!')
                reset()
            })
            .catch(err => {
                alert(`Error: ${err}`)
            })
    }
</script>