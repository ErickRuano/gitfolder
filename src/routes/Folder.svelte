<script>
	import { push, location } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'
</script>


<Container>
	
	<TitleWithButtons title="Folder name">	
		<Button  on:click={()=>{ push('/folder/new') }}>Add Folder</Button>
		<Button primary on:click={()=>{ push(`${$location}/repo/new`) }}>Add Repository</Button>
	</TitleWithButtons>
	
	
	<Container overflowY="auto">
		{#if true}
			<Placeholder text="You haven't added any contents on this folder yet" ></Placeholder>
		{:else}
		
		{/if}
	</Container>

</Container>
