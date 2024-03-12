import axios from 'axios';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const fetchData = async (): Promise<Product[]> => {
    try {
        const response = await axios.get('https://your-api-url/products'); // Замените 'https://your-api-url/products' на реальный URL вашего API
        return response.data; // Возвращаем данные о продуктах из ответа
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return []; // Возвращаем пустой массив в случае ошибки
    }
};






// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
// }
//
// const fetchData = async (): Promise<Product[]> => {
//     try {
//         const response = await axios.get('https://your-api-url/products'); // Замените 'https://your-api-url/products' на реальный URL вашего API
//         return response.data; // Возвращаем данные о продуктах из ответа
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//         return []; // Возвращаем пустой массив в случае ошибки
//     }
// };
