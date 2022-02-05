// Здесь будут действие направленные на взаимодействия элементов на странице

import $ from '../core';

// Будем добавлять обработчик события на элемент
$.prototype.on = function(eventName, callback) {
    if (!eventName || !callback){
        return this;
    } /* Это условие значит что если у нас не был перадн один из тех аргументов то мы ничего делать не будем и дальше возвращаем
объект по цепочке */
    for(let i = 0; i < this.length; i++) { 
        this[i].addEventListener(eventName, callback);
    }

    return this;
};

// Что бы прописать removeEventListener нужно передаваь строго тоже самое событие
$.prototype.off = function(eventName, callback) {
    if (!eventName || !callback){
        return this;
    }
    for(let i = 0; i < this.length; i++) { 
        this[i].removeEventListener(eventName, callback);
    }

    return this;
};

$.prototype.click = function(handler) {
    for(let i = 0; i < this.length; i++) { 
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click(); // будет виртуальный клик по элементу
        }
    }

    return this;
};
/* handler - обработчик клика */

/* Я хочу реализовать двойной фционал 
1) Когда handel был передан и мы на него навешиваем обработчик событий клика с выполнением той фции которая была передана как аргумент
2) Это когда наша фция , наш метод клик будет использоваться без передачи каких-то аргументов*/