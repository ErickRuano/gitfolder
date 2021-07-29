<script>
	import { Clerk } from '@erickruano/clerk-svelte'
	import { onMount } from 'svelte'
	import { push } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'

	import Folder from '../components/Folder.svelte'

	import { fetchRootFolders } from './../services/folder'

	// State
	let rootFolders
	let loading = true
	let empty = true

	const addFolder = ()=>{ push('/folder/new') }

	const fetchFolders = async ()=>{
		loading = true
		rootFolders = await fetchRootFolders($Clerk.user.id)
		if(Array.isArray(rootFolders) && rootFolders.length !== 0){
			empty = false
		}
		loading = false
		rootFolders = [...rootFolders]
		return rootFolders
	}

	onMount(async ()=>{
		await fetchFolders()
	})

	
</script>


<Container>

	<TitleWithButtons title="Organize your repositories into folders">	
		<Button primary on:click={addFolder}>Add folder</Button>
	</TitleWithButtons>
	
	<Container overflowY="auto">
		{#if loading}
			Loading...
		{:else}	
			{#if !empty}
				{#each rootFolders as folder, i}
					<Folder {folder} />
				{/each}
			{:else}
				<Placeholder text="You haven't added any folders yet"  ></Placeholder>
			{/if}
		{/if}
	</Container>

</Container>


