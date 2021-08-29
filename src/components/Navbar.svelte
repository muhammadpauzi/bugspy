<script>
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
</script>

<div class="container">
    <nav class="navbar d-flex py-4 align-items-center justify-content-between">
        <a href="/" class="logo">Bugspy</a>

        <Button
            on:click={() => {
                modalCreateStore.set(true);
            }}
            resetMargin={true}>Create Project</Button
        >
    </nav>
</div>

<style>
    .navbar {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-color: var(--gray-color);
    }

    .logo {
        font-size: 1.5em;
        color: var(--primary-color);
        font-weight: var(--font-bold);
    }
</style>
