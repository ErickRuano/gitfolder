<script>
	import { onMount, onDestroy } from 'svelte'
	import { push, location } from 'svelte-spa-router'

	import Icon from 'mdi-svelte';
    import { mdiDelete } from '@mdi/js';

	import Container from '../components/Container.svelte'
	import Items from '../components/Items.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'
	import Folder  from '../components/Folder.svelte'
	import Repo  from '../components/Repo.svelte'



	import { fetchFolderContents  } from '../services/folder'

	// State
	let contents
	let loading = true
	let empty = true
	let folder


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
		folder = route.replace('/folder/', '')
		fetchContents(parseInt(folder))
	})

	onDestroy(unsubscribe)

</script>


<Container>
	{#if loading}
		...
	{:else}
	<TitleWithButtons title={contents.name}  margin="0rem 0rem 4rem 0rem">	
		<Button  on:click={()=>{ push(`/folder/${folder ? folder+'/' : ''}new`) }}><Icon path={mdiDelete} color="var(--color-error)" size="2rem" /></Button>
	</TitleWithButtons>
	{/if}
	
	<Container overflowY="auto" padding="0rem">
		{#if loading}
			Loading...
		{:else}
			{#if contents}
				{#if !empty}
					<TitleWithButtons title="Folders" size="2rem"> 	
						<Button primary  on:click={()=>{ push(`/folder/${folder ? folder+'/' : ''}new`) }}>Add Folder</Button>
					</TitleWithButtons>
					<Items>
						{#each contents.folders as folder, i}
							<Folder {folder}></Folder>
						{/each}
					</Items>

					<TitleWithButtons title="Repositories" size="2rem">	
						<Button primary on:click={()=>{ push(`${$location}/repo/new`) }}>Add Repository</Button>
					</TitleWithButtons>
					<Items>
						{#each contents.repos as repo, i}
							<Repo {repo}></Repo>
						{/each}
					</Items>
				{:else}
					<Placeholder text="You haven't added any contents on this folder yet" ></Placeholder>
				{/if}
			{/if}
		{/if}
	</Container>

</Container>
