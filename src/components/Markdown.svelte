<script>
    import Markdown from 'svelte-markdown'
    export let value
    export let handleUpdate = ()=>{};
    export let editable = true

    let edit = false
    let el = null

    const autoGrow = ()=>{
        el.style.height = (el.scrollHeight)+"px";
    }

    const handleValueUpdate = ()=>{
        handleUpdate()
        edit = false;
    }
    
    const handleClick=()=>{
        edit = true
        setTimeout(()=>{
            el.focus()
            autoGrow()
        })
    }


</script>
{#if editable}
    {#if edit}
        <textarea bind:this={el} on:blur={handleValueUpdate} bind:value={value} on:input={autoGrow}></textarea>
    {:else}
        <div  on:click={handleClick} style="background: #f4f4f4!important; padding:1rem;" ><Markdown source={value || "No description available"}/></div>
    {/if}
{:else}
    <div  style="background: #f4f4f4!important; padding:1rem;" ><Markdown source={value || "No description available"}/></div>
{/if}

<style>
    textarea{
        border:none!important;
        resize:none;
        outline:none;
        padding:none!important;
        min-height:8rem;
        height:min-content;
        
    }
</style>