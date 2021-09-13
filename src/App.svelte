<script>
	import Navbar from "./components/Navbar.svelte";
	import Projects from "./components/Projects.svelte";
	import CreateProject from "./components/CreateProject.svelte";
	import EditProject from "./components/EditProject.svelte";
	import CreateIssue from "./components/CreateIssue.svelte";
	import Footer from "./components/Footer.svelte";
	import MobileNav from "./components/MobileNav.svelte";
	import Issues from "./components/Issues.svelte";
	import pageStore, { PROJECTS_PAGE, ISSUES_PAGE } from "./stores/pageStore";
</script>

<Navbar />
{#if $pageStore == PROJECTS_PAGE}
	<Projects />
	<CreateProject />
	<EditProject />
{:else if $pageStore == ISSUES_PAGE}
	<Issues />
	<CreateIssue />
{/if}
<Footer />
<MobileNav />
