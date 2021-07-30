<script>
	import { onMount, getContext } from 'svelte'
	import { push } from 'svelte-spa-router'

	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Placeholder from '../components/Placeholder.svelte'
	import Container from '../components/Container.svelte'
	import Card from '../components/Card.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Button from '../components/Button.svelte'

	import { createRepo  } from '../services/repo'
	import { getGithubCodeFromHref, importRepos, authenticateGithub  } from '../services/github'

	export let params

	// To mock on unit tests
	let loading = true
	let repos
	let code
	let newRepo = {}

	
	const addImportedRepository = async (repo)=>{
		loading = true;

		newRepo.name = repo.name;
		newRepo.description = repo.description;
		newRepo.url = repo.html_url
		newRepo.private = repo.private
		newRepo.folderId = params.folder

		const created = await createRepo(newRepo)
		loading = false;
		push(`/folder/${newRepo.folderId}`)
		
	}

	const cancel = ()=>{
		push('/folder/10')
	}

	onMount(async ()=>{
		code = getGithubCodeFromHref()
		if(code){
			loading = true
			repos = await importRepos(code)
			loading = false
		}
	})

</script>


<Container overflowY="auto">
	<TitleWithButtons title="Add new repository"></TitleWithButtons>

	{#if repos}<p>Select a repository from the list below</p>{/if}
	<Container height="calc(100vh - 6rem)" overflowY="auto" margin="1rem 0rem">
	{#if !loading}
		{#each repos as repo, i}
			<div class="select-repo">
				<Card>
					<span slot="header">{repo.name}</span>
					<p>{repo.description || 'No description available'}</p>
					<div slot="footer" class="is-right">
						<Button primary on:click={()=>{ addImportedRepository(repo) }}>Import</Button>
					</div>
				</Card>
			</div>
		{/each}
	{:else}
		{#if !code}
		<Placeholder text="You need to import your repositories from github to continue" actionText="Import from github" action={()=>{authenticateGithub(params.folder) }}  src="assets/arranging.svg"></Placeholder>
		{/if}
	{/if}
	</Container>
	

	<Buttons>
		<Button  on:click={cancel}>Cancel</Button>
		<!-- <Button primary on:click={()=>{ push('/folder/10') }}>Add repository</Button> -->
	</Buttons>

</Container>

<style>
	.select-repo{
		margin-bottom:1rem;
		
	}
</style>