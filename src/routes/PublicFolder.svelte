<script>
	import {  onDestroy } from 'svelte'
	import { push, location } from 'svelte-spa-router'

	import Icon from 'mdi-svelte';
    import { mdiDelete } from '@mdi/js';

	import Items from '../components/Items.svelte'
	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Markdown from '../components/Markdown.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Button from '../components/Button.svelte'
	import Placeholder from '../components/Placeholder.svelte'
	import Folder  from '../components/Folder.svelte'
	import Repo  from '../components/Repo.svelte'

	import { fetchFolderContents, updateFolder, removeFolder } from '../services/folder'
	import { removeRepo } from '../services/repo';

	// State
	export let params
	let contents
	let loading = true
	let empty = true
	let folder

	// Methods
	const fetchContents = async (folderId)=>{
		loading = true
		contents = await fetchFolderContents(folderId, true)
		if(contents.folders.length + contents.repos.length !== 0){
			empty = false
		}
		loading = false
		return contents
	}

	const updateFolderHandler = async ()=>{
		const updateValues = {
			id : contents.id,
			name : contents.name,
			description : contents.description
		}
		await updateFolder(updateValues)
	}

	const removeRepoHandler =  (folderId, index)=>{
		removeRepo(folderId)
		contents.repos.splice(index, 1)
		contents.repos = [...contents.repos]
	}

	const removeFolderHandler = async ()=>{
		await removeFolder(contents.id)
		if(contents.folder){
			push(`/folder/${contents.folder.id}`)
		}else{
			push('/')
		}
	}

	// Lifecycle
	const unsubscribe = location.subscribe(async (route)=>{
		folder = route.replace(`/${params.username}/folder/`, '')
		fetchContents(parseInt(folder))
	})

	onDestroy(unsubscribe)

</script>


<div style="overflow-y:auto;padding:1rem;height:100%;">
	{#if loading}
		
	{:else}
	{#if contents.folder}
		<p on:click={()=>{ push(`/folder/${contents.folder.id}`) }} class="parentFolder">{`.../${contents.folder.name.trim()}/`}</p>
	{:else}
		<p on:click={()=>{ push(`/${params.username}`) }} class="parentFolder">{params.username}/</p>
	{/if}
	<TitleWithButtons bind:title={contents.name}  editable updateHandler={updateFolderHandler} margin="0rem 0rem 1rem 0rem">	
	</TitleWithButtons>
	<Markdown editable={false} bind:value={contents.description} ></Markdown>
	{/if}

		{#if loading}
			Loading...
		{:else}
			{#if contents}
				{#if !empty}
					<TitleWithButtons title="Folders" size="2rem" margin="1rem 0rem 0rem 0rem"> 	
					</TitleWithButtons>
					<Items>
						{#each contents.folders as folder, i}
							<Folder {folder}></Folder>
						{/each}
					</Items>

					<TitleWithButtons title="Repositories" size="2rem">	
					</TitleWithButtons>
					<Items>
						{#each contents.repos as repo, i}
							<Repo {repo} removeHandler={()=>{ removeRepoHandler(repo.id, i) }}></Repo>
						{/each}
					</Items>
				{:else}
				<Placeholder text="User hasn't added any contents on this folder yet" ></Placeholder>
				{/if}
			{/if}
			
		{/if}
</div>

<style>
	.parentFolder{
		margin:0px!important;
		cursor:pointer;
		font-weight: bold;
		text-transform: uppercase;
		width:max-content;
	}
</style>