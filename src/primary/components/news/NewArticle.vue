<script setup lang="ts">
import Article from '@/domain/Article';

defineProps<{
    article: Article;
}>();
</script>

<template>
    <h2>{{ article.name }}</h2>
</template>
