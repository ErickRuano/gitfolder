<script>

import { onDestroy, onMount } from 'svelte'
import { clerk as Clerk } from './clerk.js'

    // let clerk

    // let unsubscribe = ()=>{};
    
    // onMount(()=>{

    //     unsubscribe = Clerk.subscribe(lib => {
    //         console.log(lib)
    //         if(lib){
    //             clerk = lib
    //         }
    //     });
    // })
 
    // onDestroy(unsubscribe)

</script>

<!-- {#if clerk} -->
<button on:click={()=>{ $Clerk.openSignIn() }}>SignIn</button>
<!-- {/if} -->