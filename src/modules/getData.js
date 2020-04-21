//Получение данных с сервера
export default function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('./db/db.json')
        .then((response) => {
            if (response.ok){
                return  response.json();
            }else {
                throw new Error ('ошибка' + response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch( err => {
            console.warn(err);
            goodsWrapper.innerHTML = `<div>Упс что-то пошло не так</div>`;
        });
}