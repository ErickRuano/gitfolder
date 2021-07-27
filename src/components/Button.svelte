<script>
    import { Button } from 'svelte-chota'

    export let primary = false
</script>

<Button {primary} on:click><slot></slot></Button>
