<script>
    import { push  } from 'svelte-spa-router'
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import Icon from 'mdi-svelte';
    import { mdiFolder } from '@mdi/js';

    export let params
    export let folder

    export let width = "25%"
    export let gap = "1rem"

    const openFolder = ()=>{
        push(`/folder/${folder.id}`)
    }

    const removeFolder = ()=>{}
    
</script>

{#if folder}
    <div style={`padding:${gap};width:${width};box-sizing:border-box`}>

        <div class="card" style={`width:100%`}>
            <div class="folder-title" on:click={openFolder}>
                <div width="4rem"><Icon path={mdiFolder} color="var(--color-folder)" size="2rem" /></div>
                <h3>{folder.name}</h3>
            </div>
            <!-- <p>{folder.description || "No description available"}</p> -->
        </div>
    </div>
{/if}

<style>
    .folder-title{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        cursor:pointer;
    }

    h3{
        position:relative;
        top:0.25rem;
        left:0.5rem;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
        width: calc(100% - 2rem);
    }
</style>