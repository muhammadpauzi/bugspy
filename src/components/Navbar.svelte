<script>
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
</script>

<nav class="navbar">
    <div
        class="container d-flex py-3 align-items-center justify-content-between"
    >
        <a href="/" class="logo">Bugspy</a>

        <Button
            on:click={() => {
                modalCreateStore.set(true);
            }}
            resetMargin={true}>Create Project</Button
        >
    </div>
</nav>

<style>
    .navbar {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-color: var(--gray-color);
        background-color: var(--white-color);
    }

    .logo {
        font-size: 1.5em;
        color: var(--primary-color);
        font-weight: var(--font-bold);
    }

    @media screen and (max-width: 567px) {
    }
</style>
