<script>
	import { onMount, getContext } from 'svelte'
	import { pop, push } from 'svelte-spa-router'

	import TitleWithButtons from '../components/TitleWithButtons.svelte'
	import Placeholder from '../components/Placeholder.svelte'
	import Container from '../components/Container.svelte'
	import Card from '../components/Card.svelte'
	// import Field from '../components/Field.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Button from '../components/Button.svelte'

	// To mock on unit tests
	export let env;
	env = getContext('env')

	let repos
	let code
	let newRepo = {}

	const getGithubCodeFromHref = ()=>{
		const str     = window.location.href
		const matches = str.match(/code=([^&]*)/);
		
		if(matches){
			const match = matches[1]
			const code = match.split('#')[0]
			const url = match.split('#')[1]
			window.history.replaceState({}, document.title, `/#${url}`)
			return code
		}else{
			return undefined
		}
	}

	const importFromGithub = ()=>{
		// Starts import auth flow
		const redirect_uri = 'http://localhost:5000/#/folder/10/repo/new'
		const client_id = '04989aadc45ac92c3c42'
		const base_url = 'https://github.com/login/oauth/authorize'
		window.location.href = `${base_url}?client_id=${client_id}&redirect_uri=${redirect_uri}`
	}

	const moveThisToGithubService = async (code)=>{
		// Calls own backend to get github repos with auth code

		let requestOptions = {
		method: 'GET',
		redirect: 'follow'
		};

		const response = await fetch(`${env.host}:${env.port}/api/github?code=${code}`, requestOptions)

		repos = await response.json()
		console.log(repos)
	}

	const cancel = ()=>{
		push('/folder/10')
	}

	const importRepo = (repo)=>{
		newRepo.name = repo.name;
		newRepo.description = repo.description;
		newRepo.url = repo.html_url
		newRepo.private = repo.private
		push('/folder/10')
	}

	onMount(()=>{
		code = getGithubCodeFromHref()
		if(code){
			moveThisToGithubService(code)
		}
	})

</script>


<Container overflowY="auto">
	<TitleWithButtons title="Add new repository"></TitleWithButtons>

	{#if repos}<p>Select a repository from the list below</p>{/if}
	<Container height="calc(100vh - 6rem)" overflowY="auto" margin="1rem 0rem">
	{#if repos !== undefined}
		{#each repos as repo, i}
			<div class="select-repo">
				<Card>
					<span slot="header">{repo.name}</span>
					<p>{repo.description || 'No description available'}</p>
					<div slot="footer" class="is-right">
						<Button primary on:click={()=>{ importRepo(repo) }}>Import</Button>
					</div>
				</Card>
			</div>
		{/each}
	{:else}
		{#if !code}
		<Placeholder text="You need to import your repositories from github to continue" actionText="Import from github" action={importFromGithub}  src="assets/arranging.svg"></Placeholder>
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