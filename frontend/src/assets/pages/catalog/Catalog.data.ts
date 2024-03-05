export interface Card{
    id: number;
    name: string;
    price: number;
}

export interface CardParams{
    description: string;
    type: string;
    country: string;
    color: string;
    brand: string;
}