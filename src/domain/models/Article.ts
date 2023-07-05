import type { UUID } from 'crypto';
import type { Categorie } from './Categorie';

export default interface Article {
    id: UUID;
    name: string;
    price: number;
    image: string;
    description?: string;
    quantity: number;
    type: Categorie;
}
