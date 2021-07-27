<script>
	import { Clerk } from '@erickruano/clerk-svelte'
	import Button  from './../components/Button.svelte'

	export let cta = ()=>{
		$Clerk.openSignUp()
	}
</script>

<div class="content">
	<img src="assets/undraw_folder_39kl.svg"/>
	<h1>Welcome to GitFolder</h1>
	<p>Import your repositories, organize in folders, share</p>
	<Button on:click={cta}>Get Started</Button>
</div>

<style>
	.content{
		text-align: center;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	img{
		max-width:20em;
	}

	h1 {
		color: #4a4a4a;
		text-transform: uppercase;
		font-size:3rem;
		font-weight: bold;
		margin: 1rem;
	}

	p {
		font-size:  1.6rem;
	}

	button {
		width: 8em;
		cursor:pointer;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>