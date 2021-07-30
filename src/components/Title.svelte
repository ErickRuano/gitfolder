<script>
	export let size = "3rem"
</script>

<h1 style={`font-size:${size}`}><slot></slot></h1>

<style>

	
	h1 {
		color: #4a4a4a;
		text-transform:uppercase;
		font-weight: bold;
		margin:0px;
	}


</style>