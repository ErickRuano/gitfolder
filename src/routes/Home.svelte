<script>
	import { push } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import Title from '../components/Title.svelte'
	import Placeholder from '../components/Placeholder.svelte'
</script>


<Container>
	
	<Title>Organize your repositories into folders</Title>
	
	<Container overflowY="auto">
		{#if true}
			<Placeholder text="You haven't added any folders yet" action={()=>{ push('/folder/new') }} ></Placeholder>
		{:else}
		
		{/if}
	</Container>

</Container>


