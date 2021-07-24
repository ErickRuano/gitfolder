<script>
	import Button from '../components/Button.svelte'
	import Container from '../components/Container.svelte'
</script>


<Container>
	
	<h1>Organize your repositories into folders</h1>
	
	{#if true}
	<div style="height:100%;display:flex;flex-direction:column;justify-content: center;align-items: center;"> 
		<img src="assets/undraw_No_data_re_kwbl.svg" style="margin-bottom:2rem;"/>
		<p style="text-align: center;">You haven't added any folders yet</p>
		<Button>Add folder</Button>
	</div>
	{/if}

</Container>


<style>

	
	h1 {
		color: #4a4a4a;
		font-size: 2rem;
		font-weight: bold;
	}

	img{
		align-self: center;
		width:30%;
		max-width: 24rem;
	}
</style>