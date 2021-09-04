<script>
	import Navbar from "./components/Navbar.svelte";
	import Projects from "./components/Projects.svelte";
	import CreateProject from "./components/CreateProject.svelte";
	import CreateBug from "./components/CreateBug.svelte";
	import Footer from "./components/Footer.svelte";
	import MobileNav from "./components/MobileNav.svelte";
	import Bugs from "./components/Bugs.svelte";
	import pageStore, { PROJECTS_PAGE, BUGS_PAGE } from "./stores/pageStore";
</script>

<Navbar />
{#if $pageStore == PROJECTS_PAGE}
	<Projects />
	<CreateProject />
{:else if $pageStore == BUGS_PAGE}
	<Bugs />
	<CreateBug />
{/if}
<Footer />
<MobileNav />
