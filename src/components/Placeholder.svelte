<script>
    import Button from './Button.svelte'

    export let action = ()=>{
        alert('Clicked')
    }
    export let text = "You haven't added any data yet"
    export let src = "assets/undraw_No_data_re_kwbl.svg"
</script>

<div class="placeholder"> 
    <img {src} />
    <p >{text}</p>
    <Button on:click={action}>Add folder</Button>
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