<script>
	import Navbar from "./components/Navbar.svelte";
	import Projects from "./components/Projects.svelte";
	import CreateProject from "./components/CreateProject.svelte";
	import CreateBug from "./components/CreateBug.svelte";
	import Footer from "./components/Footer.svelte";
	import Button from "./shared/Button.svelte";
	import { modalCreateStore } from "./stores/modalStore";
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

<div class="mobile-menu">
	{#if $pageStore == PROJECTS_PAGE}
		<Button
			class=""
			on:click={() => {
				modalCreateStore.set(true);
			}}
			resetMargin={true}>Create Project</Button
		>
	{:else if $pageStore == BUGS_PAGE}
		<div class="d-flex align-items-center">
			<Button
				class="me-1"
				resetMargin={true}
				on:click={() => ($pageStore = PROJECTS_PAGE)}>Projects</Button
			>
			<Button
				on:click={() => {
					modalCreateStore.set(true);
				}}
				resetMargin={true}>Create Bug</Button
			>
		</div>
	{/if}
</div>

<style>
	.mobile-menu {
		display: none;
	}

	@media screen and (max-width: 567px) {
		.mobile-menu {
			background-color: var(--white-color);
			padding: 1rem;
			border-top: 1px solid var(--gray-color);
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			z-index: 999;
		}
	}
</style>
