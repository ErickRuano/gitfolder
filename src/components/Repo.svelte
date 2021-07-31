<script>
import Card from './Card.svelte'
import Button from './Button.svelte'

export let removeHandler = ()=>{ }
export let repo
export let width = "50%"
export let gap = "1rem"

const openRepo = ()=>{ window.location.href = repo.url  }
</script>

<div class="repo-container" style={`--width:${width};padding:${gap}`}>
    <Card>
        <span slot="header" on:click={openRepo}>{repo.name}</span>
        <p>{repo.description || "No description available"}</p>
        <div slot="footer" class="is-right">
            <Button clear on:click={removeHandler}>Remove</Button>
            <Button primary on:click={openRepo}>Open</Button>
        </div>
    </Card>
</div>

<style>
    span[slot="header"]{
        cursor:pointer;
    }

    p{
        text-overflow: ellipsis;
         overflow:hidden;
        white-space: nowrap;
    }
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