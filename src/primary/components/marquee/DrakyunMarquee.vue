<script setup lang="ts">
// TODO : device low perf = disable marquee
// TODO : add space after content (&#160;)

defineProps<{
    content: string;
}>();
</script>

<template>
    <div class="marquee-container">
        <div class="marquee">{{ content }}</div>
        <div class="marquee">{{ content }}</div>
    </div>
</template>

<style scoped>
.marquee-container {
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;

    overflow: hidden;

    background-color: var(--c-yellow);
}

.marquee {
    animation: honrizontal-scroll 35s linear infinite;

    font-weight: bold;
    white-space: nowrap;
    text-transform: uppercase;
}

@keyframes honrizontal-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
