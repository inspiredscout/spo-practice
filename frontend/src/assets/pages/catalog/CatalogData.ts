// import axios from 'axios';
// async function fetchData() {
//     try {
//         const response = await axios.get('https://randomuser.me/api/');
//         return response.data;
//     } catch (error) {
//         console.error('Ошибка при выполнении запроса:', error);
//         throw error;
//     }
// }
//
// // Пример использования
// fetchData().then((userData) => {
//     // Здесь вы можете работать с данными, например, выводить их в консоль
//     console.log(userData);
// });
//
// // Пример использования
// fetchData().then((userData) => {
//     const nameTitle = userData.results[0]?.name.title || 'Нет данных';
//     console.log('Title:', nameTitle);
//
//     // Находим элемент на странице, куда мы хотим поместить значение nameTitle
//     const titleElement = document.getElementById('title');
//
//     // Обновляем содержимое элемента с полученным значением nameTitle
//     titleElement.innerText = nameTitle;
// });