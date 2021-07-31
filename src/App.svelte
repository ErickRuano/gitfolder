<script>
	import { setContext } from 'svelte'
	import Router, { push } from 'svelte-spa-router'
	
	import 'chota'
	import '@mdi/font'

	import { ClerkProvider, UserButton, SignedIn, SignedOut } from '@erickruano/clerk-svelte'
	import SignInButton from './components/SignInButton.svelte'

	import Home from './routes/Home.svelte'
	import PublicHome from './routes/PublicHome.svelte'
	import Folder from './routes/Folder.svelte'
	import PublicFolder from './routes/PublicFolder.svelte'
	import NewFolder from './routes/NewFolder.svelte'
	import NewRepo from './routes/NewRepo.svelte'
	import Landing from './routes/Landing.svelte';
	import NotFound from './routes/NotFound.svelte';

	export let env

	let login = false;

	setContext('env', env || {})


	const routes = {
		"/" : Home,
		"/folder/:folder?/new" : NewFolder,
		"/folder/:folder" : Folder,
		"/folder/:folder/repo/new" : NewRepo,
		"/:username" : PublicHome,
		"/:username/folder/:folder" : PublicFolder,
		'*' : NotFound
 	}

	 const publicRoutes = {
		"/" : Landing,
		"/:username" : PublicHome,
		"/:username/folder/:folder" : PublicFolder,
		'*' : NotFound
	 }


</script>

<svelte:head>
	<title>GITFOLDER</title>
</svelte:head>

<ClerkProvider frontendApi={env.CLERK_FRONTEND_API }></ClerkProvider>

<header>
	<!-- <h1 style="font-size:18px;">GITFOLDER</h1> -->
	<img src="assets/logo_w.png" alt="GITFOLDER logo" style="width:148px; cursor:pointer;" on:click={()=>{ push('/') }}/>
	<nav>
	
		<SignedIn>
			<span ><UserButton></UserButton></span>
		</SignedIn>
		<SignedOut>
			<span slot="signedOut">
				<SignInButton></SignInButton>
			</span>
		</SignedOut>
	</nav>
</header>
<main>

	<SignedIn>
		<div class="loader" slot="loading">Loading...</div>
		<div class="slot"><Router {routes}></Router></div>
	</SignedIn>
	<SignedOut>
		<div class="slot" slot="signedOut"><Router routes={publicRoutes}></Router></div>
	</SignedOut>
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
		box-shadow: 0px -2px 24px 0px rgba(50, 50, 50, 0.25);
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
		text-align:center;
	}

	div.slot, span[slot]{
		height:100%;
		width:100%;
	}
</style>