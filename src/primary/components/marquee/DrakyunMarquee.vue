<script setup lang="ts">
defineProps<{
    content: string;
    duration: string;
}>();
</script>

<template>
    <div class="marquee-container">
        <div class="marquee" :style="{ '--after-content': `'${content}'`, '--marquee-duration': `${duration}` }">
            {{ content }}
        </div>
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
    animation: honrizontal-scroll linear infinite;
    animation-duration: var(--marquee-duration);
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

@media (prefers-reduced-motion) {
    .marquee {
        animation: none;
    }
}
</style>
