<script>
    import { push  } from 'svelte-spa-router'
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import Icon from 'mdi-svelte';
    import { mdiFolder } from '@mdi/js';

    export let params
    export let folder

    
</script>

{#if folder}
<Card>
        <span slot="header">
            <h3><Icon path={mdiFolder} color="var(--color-error)" size="4rem" />{folder.name}</h3>
        </span>
        <p>{folder.description || "No description available"}</p>
        <div slot="footer" class="is-right">
            <Button clear>Delete</Button>
            <Button primary on:click={ push(`/folder/${folder.id}`) }>Open</Button>
        </div>
    </Card>
{/if}