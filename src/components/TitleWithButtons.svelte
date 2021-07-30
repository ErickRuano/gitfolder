<script>
	import Container from '../components/Container.svelte'
	import Buttons from '../components/Buttons.svelte'
	import Title from '../components/Title.svelte'

	export let title = ""
	export let size = ""
	export let margin = "0rem"
</script>



<div class="title-with-actions" style={`margin:${margin}`}>
    <Title {size}>{title}</Title>
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


