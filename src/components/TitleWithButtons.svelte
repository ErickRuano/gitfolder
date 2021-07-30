<script>
	import Buttons from '../components/Buttons.svelte'
	import Title from '../components/Title.svelte'

	export let updateHandler = ()=>{}
	export let editable = false
	export let title = ""
	export let size = ""
	export let margin = "0rem"
</script>



<div class="title-with-actions" style={`margin:${margin}`}>
    <Title {size}>
		{#if editable}
			<input type="text" bind:value={title} on:change={updateHandler}/>
		{:else}
			{title}
		{/if}
	</Title>
    <Buttons>
        <slot/>
    </Buttons>
</div>


<style>
	.title-with-actions{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}

	input{
		border:none!important;
		margin-left:0px!important;
		padding-left:0px!important;
		font-weight: bold!important;
		text-transform: uppercase!important;
	}
</style>


