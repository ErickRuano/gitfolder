import App from './App.svelte';
import env from './.env.js'

const app = new App({
	target: document.body,
	props: {
		env
	}
});

export default app;