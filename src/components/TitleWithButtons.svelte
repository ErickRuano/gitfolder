<script>
	import Container from '../components/Container.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Title from '../components/Title.svelte'

	export let title = ""
</script>



<div class="title-with-actions">
    <Title>{title}</Title>
    <Buttons>
        <slot/>
    </Buttons>
</div>


<style>
	.title-with-actions{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>


