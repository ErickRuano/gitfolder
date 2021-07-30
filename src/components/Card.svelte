<script>
    import { Card } from 'svelte-chota'
    export let margin = "0rem 0rem 2rem 0rem"
</script>

<div style={`margin:${margin}`}>
    <Card>
        <h4 slot="header"><slot name="header"/></h4>
        
        <slot/>
        
        <div slot="footer" class="is-right">
            <slot name="footer"></slot>
        </div>
    </Card>
</div>

<style>

</style>