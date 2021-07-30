<script>
    export let overflowY = 'hidden';
    export let width = "100%"
    export let height = "auto"
    export let margin = "0px!important"
    export let padding = "1rem"
</script>

<div class="itemsContainer" style={`overflow-y:${overflowY}; width:${width}; height:${height}; margin:${margin}; padding:${padding}`}>
    <slot/>
</div>

<style>
.itemsContainer{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    
}
</style>