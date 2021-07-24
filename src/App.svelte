<script>
	import Router from 'svelte-spa-router'

	import 'chota'

	import { clerk } from './components/clerk/clerk'
	import ClerkLoader from './components/clerk/ClerkLoader.svelte'
	import UserButton from './components/clerk/ClerkUserButton.svelte'
	import SignInButton from './components/clerk/SignInButton.svelte'

	import SignedIn from './components/clerk/SignedIn.svelte'
	import SignedOut from './components/clerk/SignedOut.svelte'

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
	<h1 style="font-size:18px;">GITFOLDER</h1>
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
		<span ><Router {routes}></Router></span>
	</SignedIn>
	<SignedOut>
		<span slot="signedOut">
			<Landing bind:login={login}></Landing>
		</span>
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

	span[slot]{
		height:100%;
		width:100%;
	}
</style>