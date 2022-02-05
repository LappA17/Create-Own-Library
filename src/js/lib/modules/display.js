import $ from '../core'; // две точки что бы выйти из папки модульс

$.prototype.show = function() {
    for(let i = 0; i < this.length; i++) { // это те 3 дива которые мы создали в html, i это один из них
        if (!this[i].style) {
            continue;
        } /* Если у элемента нет стилей то мы простой пропустим с помощью континью этот элемент */

        this[i].style.display = '';
    }

    return this; // Возвращаем объект что бы дальше можно было с ним работать
};

$.prototype.hide = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }

    return this;
};

// toggle для того если элемент скрыт-показываем, если показывается то скрываем
$.prototype.toggle = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
};
