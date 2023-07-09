<script setup lang="ts"></script>

<template>
    <header>
        <img class="logo" src="@/primary/assets/images/logo.png" alt="Drakyun logo" />
        <div class="interactions">
            <button class="btn-cart">
                <img class="cart" src="@/primary/assets/images/icons/cart-icon.svg" alt="Panier" />
            </button>
            <button class="btn-menu">
                <span class="line"></span>
            </button>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    width: 100%;
    height: 4rem;

    border-radius: 0rem 0rem 1.25rem 1.25rem;
    background-color: var(--c-black);
}

header .logo {
    width: auto;
    height: 3rem;
    margin-left: 1.5rem;
}

header .interactions {
    display: flex;
    align-items: center;

    margin-left: auto;
    margin-right: 1rem;
}

header .interactions button {
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 0.5rem;

    border: none;
    background-color: transparent;
}

header .interactions .btn-cart .cart {
    width: auto;
    height: 80%;
}

header .interactions .btn-menu {
    position: relative;
}

header .interactions .btn-menu::before,
header .interactions .btn-menu::after {
    position: absolute;
    left: calc((100% - 80%) / 2);

    display: block;

    content: '';

    width: 80%;
    height: 2px;

    border-radius: 10px;
    background-color: var(--c-pink);
}

header .interactions .btn-menu::before {
    top: 5px;
}

header .interactions .btn-menu::after {
    bottom: 5px;
}

header .interactions .btn-menu .line {
    display: block;

    content: '';

    width: 80%;
    height: 2px;
    margin: 0 auto;

    border-radius: 10px;
    background-color: var(--c-pink);
}
</style>
