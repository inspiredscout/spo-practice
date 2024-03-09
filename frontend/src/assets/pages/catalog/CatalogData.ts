import axios from 'axios';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        return response.data.results; // Возвращаем результаты из ответа API (предположим, что данные находятся в массиве 'results')
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
    }
};

