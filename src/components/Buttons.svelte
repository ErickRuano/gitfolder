<script>
    export let justify = "flex-start"
</script>

<div class="buttons" style={`justify-content:${justify}`}>
    <slot/>
</div>


<style>
.buttons{
    display:flex;
}

</style>