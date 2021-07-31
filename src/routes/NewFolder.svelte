<script>
	import { onDestroy, onMount } from 'svelte'
	import { pop, location, push } from 'svelte-spa-router'

	import Title from '../components/Title.svelte'
	import Container from '../components/Container.svelte'
	import Field from '../components/Field.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Button from '../components/Button.svelte'

	import { createFolder  } from '../services/folder'

	// State
	export let params
	let loading = false;
	let folder

	const blankFolder = {
		name : "",
		description : ""
	}

	let newFolder = { ...blankFolder }

	// Methods

	const addFolder = async ()=>{
		loading = true;
		if(folder){
			newFolder.folderId = folder
		}
		const createdFolder = await createFolder(newFolder)
		loading = false;
		push(`/folder/${createdFolder.id}`)
	}

	const cancel = ()=>{
		pop()
	}

	// Lifecycle
	const unsubscribe = location.subscribe(async (route)=>{
		if(params.folder){
			let folderId = route.replace('/folder/', '')
			folderId = folderId.replace('/new', '')
			folder = folderId
		}
	})

	onDestroy(unsubscribe)


</script>


<Container>
	<Title>Add new folder</Title>
	<Field label="Name" bind:value={newFolder.name}></Field>
	<Field textarea label="Description" bind:value={newFolder.description}></Field>
	<Buttons>	
		<Button  on:click={cancel}>Cancel</Button>
		<Button primary on:click={addFolder}>Add folder</Button>
	</Buttons>
</Container>

