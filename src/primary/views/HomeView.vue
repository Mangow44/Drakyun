<script setup lang="ts">
import DrakyunMarquee from '@/primary/components/marquee/DrakyunMarquee.vue';
</script>

<template>
    <main>
        <drakyun-marquee :content="'nouveautés nouveautés nouveautés nouveautés&#160;'" />
    </main>
</template>

<style scoped>
.marquee-container {
    margin-top: auto;
}
</style>
