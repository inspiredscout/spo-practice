import axios from 'axios';

export interface Photo {
    id: number;
    photoId: number;
    url: string;
}

export interface Product{
    id: number;
    name: string;
    price: string;
    description: string;
    type: string;
    country: string;
    color: string;
    brand: string;
    visibility: boolean;
    photos: Photo[];
}


const fetchData = async (): Promise<Product[]> => {
    try {
        const response = await axios.get('https://spo.ultrapivomode.space/api/product/getAll');
        const products: Product[] = response.data; // Типизация данных как массив продуктов
        return products; // Возвращаем данные для дальнейшего использования
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
};

export { fetchData };
