<script>
import Card from './Card.svelte'
import Button from './Button.svelte'

export let removeHandler = ()=>{ }
export let repo
export let width = "50%"
export let gap = "1rem"
</script>

<div class="repo-container" style={`--width:${width};padding:${gap}`}>
    <Card>
        <span slot="header">{repo.name}</span>
        <p>{repo.description}</p>
        <div slot="footer" class="is-right">
            <Button clear on:click={removeHandler}>Remove</Button>
            <Button primary on:click={()=>{ window.location.href = repo.url  }}>Open</Button>
        </div>
    </Card>
</div>

<style>
    .repo-container{
        box-sizing: border-box;
        width:100%!important
    }

    @media only screen and (min-width: 900px) {
        .repo-container {
            width:var(--width)!important;
        }
    }

</style>