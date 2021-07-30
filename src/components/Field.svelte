<script>
    import { Field, Input } from 'svelte-chota'
    export let label = "Label"
    export let value = "" 
    export let textarea = false;
</script>

<Field {label}>
    <Input {textarea} bind:value={value}/>
</Field>