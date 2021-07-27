<script>
	import { push } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'

	const addFolder = ()=>{ push('/folder/new') }
</script>


<Container>

	<TitleWithButtons title="Organize your repositories into folders">	
		<Button primary on:click={addFolder}>Add folder</Button>
	</TitleWithButtons>
	
	<Container overflowY="auto">
		{#if true}
			<Placeholder text="You haven't added any folders yet"  ></Placeholder>
		{:else}
		
		{/if}
	</Container>

</Container>


