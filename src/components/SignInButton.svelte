<script>
import { Clerk  } from '@erickruano/clerk-svelte'
</script>

<button on:click={()=>{ $Clerk.openSignIn() }}>SignIn</button>