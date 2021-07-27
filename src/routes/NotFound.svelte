<script>
	import { push } from 'svelte-spa-router'

	import Container from '../components/Container.svelte'
	import Button from '../components/Button.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Placeholder from '../components/Placeholder.svelte'

</script>


<Container>
	<Placeholder text="Oops! It looks like you tried to access a page that is not available" src="assets/404.svg" action={()=>{ push('/') }} actionText="Go back home"  ></Placeholder>
	<!-- <Button primary on:click={()=>{ push('/') }}>Go back home</Button> -->
</Container>


