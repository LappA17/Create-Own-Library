// Будем работать с классами
import $ from '../core';

$.prototype.addClass = function(...classNames) {
/*Классов может быть много. По этому при помощи рест опператора передаем ...classNames. И теперь нам все равно сколько классом мы запишем
как аргументы */
//Теперь поработаем с теми элементами которые были получены и на которые нужно добавлять классы
    for(let i = 0; i < this.length; i++) { // this.length - это все элементы что мы получили
        this[i].classList.add(...classNames); // класслист ад может добавить много классов
    }

    return this; // объект
};

// Тоже можного много классов удалять
$.prototype.removeClass = function(...classNames) {
    for(let i = 0; i < this.length; i++) { 
        this[i].classList.remove(...classNames);
    }

    return this;
};

// Здесь можно добавлять только один класс
$.prototype.toggleClass = function(classNames) {
    for(let i = 0; i < this.length; i++) { 
        this[i].classList.toggle(classNames);
    }

    return this;
};