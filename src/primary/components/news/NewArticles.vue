<script setup lang="ts">
import NewArticle from '@/primary/components/news/NewArticle.vue';
import Article from '@/domain/Article';

const mockedNewArticles: Article[] = [
    {
        id: '258f61c8-598d-44b4-8c25-b01faa2c5cef',
        name: 'Snow Miku 2023',
        price: 2.0,
        image: 'https://images.squarespace-cdn.com/content/v1/6395e3270b4131087d975a66/1681916323993-T5VI980AXS6TPV7HPB4E/Sticker+Snow+Miku.jpg?format=750w',
        description: 'Sticker transparent',
        size: '6,3 x 6,3 cm',
        quantity: 5,
        type: 'STICKER',
    },
];
</script>

<template>
    <div class="news-container">
        <new-article v-for="newArticle in mockedNewArticles" :article="newArticle" />
    </div>
</template>

<style scoped>
.news-container {
    width: 100%;
    height: 100%;

    overflow: auto;
    background-color: aqua;
}
</style>
