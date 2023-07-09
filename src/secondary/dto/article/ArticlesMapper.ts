import type ModelMapper from '@/secondary/dto/ModelMapper';
import type Article from '@/domain/models/Article';
import type ArticleDto from '@/secondary/dto/article/ArticleDto';

export default class ArticlesMapper implements ModelMapper<Article, ArticleDto> {
    toEntity(dto: ArticleDto): Article {
        return {
            id: dto.id,
            name: dto.name,
            price: dto.price,
            image: dto.image,
            description: dto.description,
            size: dto.size,
            quantity: dto.quantity,
            type: dto.type,
        };
    }
    toDto(entity: Article): ArticleDto {
        return {
            id: entity.id,
            name: entity.name,
            price: entity.price,
            image: entity.image,
            description: entity.description,
            size: entity.size,
            quantity: entity.quantity,
            type: entity.type,
        };
    }
}
