<script>
    import Icon from "../shared/Icon.svelte";
</script>

<footer class="footer">
    <div class="container py-4">
        <div class="d-flex justify-content-between align-items-center">
            <p>Created by Muhammad Pauzi.</p>
            <a href="https://github.com/muhammadpauzi/bugspy" target="_blank"
                ><Icon name="github" /></a
            >
        </div>
    </div>
</footer>

<style>
    .footer {
        text-align: center;
        font-weight: var(--font-medium);
        background-color: var(--white-color);
        color: var(--black-color);
        border-top-width: 1px;
        border-top-style: solid;
        border-color: var(--gray-color);
    }

    @media screen and (max-width: 567px) {
        .footer {
            margin-bottom: 5.4rem;
        }

        .footer p,
        .footer a {
            font-size: 0.8em;
        }
    }
</style>
