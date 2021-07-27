<script>
    import { Field, Input } from 'svelte-chota'
    export let label = "Label"
    export let value = "" 
</script>

<Field {label}>
    <Input bind:value={value}/>
</Field>