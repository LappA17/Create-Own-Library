import $ from '../core';

// Получаем данные
$.prototype.get = async function(url, dataTypeAnswer = 'json'){ /* Первый аргумент будет юрл, второй в каком формате 
вернуться данные. По умолчанию джсон */

    let res = await fetch(url); // мы отправляет фетч запрос по юрл, при помощи опператора await мы полностью дожидаемся окончание 

// Потом помещаем промис в переменую и проверяем ее
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    // Так как у нас может быть несколько вариантов ответа, воспользуемся switch

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json(); // вернет джсон формат, res.json тоже асинхрон по этому await
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};