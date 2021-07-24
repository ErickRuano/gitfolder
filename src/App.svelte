<script>
	import Router from 'svelte-spa-router'

	import 'chota'

	import { clerk } from './components/clerk/clerk'
	import ClerkLoader from './components/clerk/ClerkLoader.svelte'
	import UserButton from './components/clerk/ClerkUserButton.svelte'
	import SignInButton from './components/clerk/SignInButton.svelte'

	import Home from './routes/Home.svelte'
	import Folder from './routes/Folder.svelte'
	import NewFolder from './routes/NewFolder.svelte'
	import Repo from './routes/Repo.svelte'
	import Landing from './routes/Landing.svelte';

	let login = false;

	const routes = {
		"/" : Home,
		"/folder/new" : NewFolder,
		"/folder/:folder?" : Folder,
		"/folder/:folder/repo/:repo" : Repo,
		'*' : Landing
 	}


</script>

<ClerkLoader api="clerk.ip0fw.qmsqm.lcl.dev"></ClerkLoader>

<header>
	<h1>GITFOLDER</h1>
	<nav>
		{#if $clerk.user === undefined}
			Loading...
		{:else}
			{#if $clerk.user}
				<UserButton/>
			{:else}
				<SignInButton/>
			{/if}
		{/if}
	</nav>
</header>
<main>
	{#if $clerk.user === undefined}
		<div class="loader">Loading...</div>
	{:else}
		{#if $clerk.user}
			<Router {routes}></Router>
		{:else}
			<Landing bind:login={login}></Landing>
		{/if}
	{/if}
</main>

<style>
	main{
		padding: 1em;
		height: calc(100vh - 6rem);
		border-radius: 2rem 2rem 0rem 0rem;
		margin: 0 auto;
		background:white;
		position:relative;
		box-sizing: border-box;
		display:flex;
		flex-direction: column;
	}

	header{
		width:100%;
		height:6rem;
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding:0px 2em;
		box-sizing:border-box;
		color:white;
	}

	.loader{
		align-self: center;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
	}
</style>