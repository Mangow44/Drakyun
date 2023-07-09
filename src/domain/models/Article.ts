import type { UUID } from 'crypto';
import type { Categorie } from '@/domain/models/Categorie';

export default interface Article {
    id: UUID;
    name: string;
    price: number;
    image: string;
    description?: string;
    size?: string;
    quantity: number;
    type: Categorie;
}
