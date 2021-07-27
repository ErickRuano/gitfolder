<script>
    export let overflowY = 'hidden';
    export let width = "100%"
    export let height = "100%"
    export let margin = "0px!important"
</script>

<div class="containerComponent" style={`overflow-y:${overflowY}; width:${width}; height:${height}; margin:${margin}`}>
    <slot/>
</div>

<style>
.containerComponent{
    padding:1em;
    display:flex;
    flex-direction: column;
}
</style>