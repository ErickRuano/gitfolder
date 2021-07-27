<script>
	import { pop, push } from 'svelte-spa-router'

	import Title from '../components/Title.svelte'
	import Container from '../components/Container.svelte'
	import Field from '../components/Field.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Button from '../components/Button.svelte'

	const blankFolder = {
		name : "",
		description : ""
	}

	let newFolder = { ...blankFolder }

	const addFolder = ()=>{
		push('/folder/10')
	}

	const cancel = ()=>{
		pop()
	}


</script>


<Container>
	<Title>Add new folder</Title>
	<Field label="Name" bind:value={newFolder.name}></Field>
	<Field label="Description" bind:value={newFolder.description}></Field>
	<Buttons>	
		<Button  on:click={cancel}>Cancel</Button>
		<Button primary on:click={addFolder}>Add folder</Button>
	</Buttons>
</Container>

