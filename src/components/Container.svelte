<script>
    export let overflowY = 'hidden';
</script>

<div class="containerComponent" style={`overflow-y:${overflowY}`}>
    <slot/>
</div>

<style>
.containerComponent{
    padding:1em;
    margin:0px!important;
    height: 100%;
    display:flex;
    flex-direction: column;
    width:100%;
}
</style>