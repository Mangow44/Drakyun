import type { UUID } from 'crypto';
import type { CategorieDto } from '@/secondary/dto/article/CategorieDto';

export default interface ArticleDto {
    id: UUID;
    name: string;
    price: number;
    image: string;
    description?: string;
    quantity: number;
    type: CategorieDto;
}
