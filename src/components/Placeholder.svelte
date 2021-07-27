<script>
    import Button from './Button.svelte'

    export let action = undefined
    export let actionText = undefined
    export let text = "You haven't added any data yet"
    export let src = "assets/organizing.svg"
</script>

<div class="placeholder"> 
    <img {src} />
    <p >{text}</p>
    {#if action && actionText}
    <Button primary on:click={action}>{actionText}</Button>
    {/if}
</div>

<style>
    .placeholder{
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

    img{
        margin-bottom:2rem;
		align-self: center;
		width:30%;
		max-width: 24rem;
    }

    p{
        text-align: center;
    }
</style>