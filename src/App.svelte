<script>
	import Navbar from "./components/Navbar.svelte";
	import Projects from "./components/Projects.svelte";
	import CreateProject from "./components/CreateProject.svelte";
	import Footer from "./components/Footer.svelte";
	import pageStore, {
		PROJECTS_PAGE,
		BUGS_PAGE,
		BUG_PROJECT_ID,
	} from "./stores/pageStore";
</script>

<Navbar />
{#if $pageStore == PROJECTS_PAGE}
	<Projects />
	<CreateProject />
{:else if $pageStore == BUGS_PAGE}
	<h1>{BUG_PROJECT_ID}</h1>
	<button on:click={() => pageStore.set(PROJECTS_PAGE)}>Projects</button>
{/if}
<Footer />
