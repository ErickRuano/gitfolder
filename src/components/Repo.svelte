<script>
import Card from './Card.svelte'
import Button from './Button.svelte'
export let repo
</script>

<Card>
    <span slot="header">{repo.name}</span>
    <p>{repo.description}</p>
    <div slot="footer" class="is-right">
        <Button clear>Delete</Button>
        <Button primary on:click={()=>{ window.location.href = repo.url  }}>Open</Button>
    </div>
</Card>