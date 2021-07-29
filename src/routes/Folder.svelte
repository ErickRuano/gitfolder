<script>
	import { onMount, onDestroy } from 'svelte'
	import { push, location } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Subtitle from '../components/Subtitle.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'
	import Folder  from '../components/Folder.svelte'
	import Repo  from '../components/Repo.svelte'

	import { fetchFolderContents  } from '../services/folder'

	// State
	let contents
	let loading = true
	let empty = true

	// Methods
	const fetchContents = async (folderId)=>{
		loading = true
		contents = await fetchFolderContents(folderId)
		if(contents.folders.length + contents.repos.length !== 0){
			empty = false
		}
		loading = false
		return contents
	}

	// Lifecycle
	const unsubscribe = location.subscribe(async (route)=>{
		const folder = route.replace('/folder/', '')
		fetchContents(parseInt(folder))
	})

	onDestroy(unsubscribe)

</script>


<Container>
	
	<TitleWithButtons title="Folder name">	
		<Button  on:click={()=>{ push('/folder/new') }}>Add Folder</Button>
		<Button primary on:click={()=>{ push(`${$location}/repo/new`) }}>Add Repository</Button>
	</TitleWithButtons>
	
	<Container overflowY="auto">
		{#if loading}
			Loading...
		{:else}
			{#if contents}
				{#if !empty}
					<Subtitle>Folders</Subtitle>
					{#each contents.folders as folder, i}
						<Folder {folder}></Folder>
					{/each}
					<Subtitle>Repositories</Subtitle>
					{#each contents.repos as repo, i}
						<Repo {repo}></Repo>
					{/each}
				{:else}
					<Placeholder text="You haven't added any contents on this folder yet" ></Placeholder>
				{/if}
			{/if}
		{/if}
	</Container>

</Container>
