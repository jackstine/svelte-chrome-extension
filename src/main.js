import App from './App.svelte';

const div = document.querySelectorAll('form[action="/search"]')[0].parentElement.parentElement.children[3]
div.innerHTML = '<div id="addSvelteHere"></div>'

const app = new App({
	target: document.querySelector("#addSvelteHere"),
	props: {
		name: 'world'
	}
});

export default app;