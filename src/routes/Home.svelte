<script>


	import { Clerk } from '@erickruano/clerk-svelte'
	import { onMount, getContext } from 'svelte'
	import { push } from 'svelte-spa-router'

	import Icon from 'mdi-svelte';
    import { mdiOpenInNew } from '@mdi/js';
    

	import Container from '../components/Container.svelte'
	import Items from '../components/Items.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'

	import Folder from '../components/Folder.svelte'

	import { fetchRootFolders } from './../services/folder'
	import { fetchProfileURL } from './../services/profile'

	// Environment
	const env = getContext('env')

	// State
	export let params
	let rootFolders
	let loading = true
	let empty = true

	const addFolder = ()=>{ push('/folder/new') }
	
	const openPublic = async ()=>{
		const url = await fetchProfileURL()
		window.open(`${env.HOST}/#${url}`, '_blank')
	}

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
		<Button primary on:click={openPublic}>Public <Icon path={mdiOpenInNew} color="white" size="2rem" /></Button>
	</TitleWithButtons>
	
	<Container overflowY="auto" padding="0rem">
		{#if loading}
			Loading...
		{:else}	
			{#if !empty}
				<Items>
					{#each rootFolders as folder, i}
						<Folder {folder}  />
					{/each}
				</Items>
			{:else}
				<Placeholder text="You haven't added any folders yet"  ></Placeholder>
			{/if}
		{/if}
	</Container>

</Container>
