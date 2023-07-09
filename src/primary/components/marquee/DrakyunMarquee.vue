<script setup lang="ts">
// TODO : device low perf = disable marquee
// TODO : add space after content (&#160;)
// TODO : passer la vitesse en props

defineProps<{
    content: string;
}>();
</script>

<template>
    <div class="marquee-container">
        <div class="marquee" :style="{ '--after-content': `'${content}'` }">{{ content }}</div>
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
    animation: honrizontal-scroll 5s linear infinite;
}

.marquee,
.marquee::after {
    font-weight: bold;
    white-space: nowrap;
    text-transform: uppercase;
}

.marquee::after {
    content: var(--after-content);
    background-color: transparent;
}

@keyframes honrizontal-scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}
</style>
