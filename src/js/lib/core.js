// Ядро нашей библиотеки

 const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; 
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this; // фция прекратит свою работу и код дальше не пойдет там где object.assign и тд
    }
/* Нам нужно узнать является ли селектор тегом, ведь если нам в this будет приходить элемент с хтмлколлекции то будет
ошибка 
this[0] = selector; - мы помещаем на 0 позицию тот элемент который приходит потому что у нас сам объект состоит
их ключей и значений, здесь мы делаем тоже самое только вручную*/

    Object.assign(this, document.querySelectorAll(selector));   
    this.length = document.querySelectorAll(selector).length;
    return this; 
};
    $.prototype.init.prototype = $.prototype; 

    window.$ = $;

    export default $;