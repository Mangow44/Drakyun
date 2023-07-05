import { describe, expect, it } from 'vitest';
import type Article from '@/domain/models/Article';
import type ArticleDto from '@/secondary/dto/article/ArticleDto';
import ArticlesMapper from '@/secondary/dto/article/ArticlesMapper';

describe('Articles mapper', () => {
    const articlesMapper = new ArticlesMapper();
    const article: Article = {
        id: 'd4c90d18-1b59-11ee-be56-0242ac120002',
        name: 'article',
        price: 1,
        image: 'article.png',
        description: 'description',
        quantity: 1,
        type: 'STICKER',
    };
    const articleDto: ArticleDto = {
        id: 'd4c90d18-1b59-11ee-be56-0242ac120002',
        name: 'article',
        price: 1,
        image: 'article.png',
        description: 'description',
        quantity: 1,
        type: 'STICKER',
    };

    it('Map dto to entity', () => {
        const entity: Article = articlesMapper.toEntity(articleDto);

        expect(entity).toEqual(article);
    });

    it('Map entity to dto', () => {
        const dto: ArticleDto = articlesMapper.toDto(article);

        expect(dto).toEqual(articleDto);
    });
});
