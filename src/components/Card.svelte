<script>
    import { Card } from 'svelte-chota'
</script>

<Card>
    <h4 slot="header"><slot name="header"/></h4>

   <slot/>
    
    <div slot="footer" class="is-right">
        <slot name="footer"></slot>
    </div>
</Card>