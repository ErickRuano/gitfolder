<script>
    export let overflowY = 'hidden';
    export let width = "100%"
    export let height = "100%"
    export let margin = "0px!important"
    export let padding = "1rem"
</script>

<div class="containerComponent" style={`overflow-y:${overflowY}; width:${width}; height:${height}; margin:${margin}; padding:${padding}`}>
    <slot/>
</div>

<style>
.containerComponent{
    display:flex;
    flex-direction: column;
}
</style>