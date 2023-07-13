<script setup lang="ts">
import NewArticles from '@/primary/components/news/NewArticles.vue';
import DrakyunMarquee from '@/primary/components/marquee/DrakyunMarquee.vue';
</script>

<template>
    <main>
        <section id="news">
            <new-articles />

            <drakyun-marquee
                :content="'nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;\
                nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;\
                nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;\
                nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;\
                nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;nouveautés&#160;&#160;&#160;&#160;&#160;&#160;'"
                :duration="'50s'"
            />
        </section>
    </main>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
}
.marquee-container {
    margin-top: auto;
}
</style>
