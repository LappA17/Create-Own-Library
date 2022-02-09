import $ from '../core';

$.prototype.modal = function() {
    /* Создаем триггеры в индекс.хтмл для вызова модельного окна, назначаем атрбиту ссылке data-toggle="modal"
Так же нужно конкретно указать какое мод окно будет вызываться data-target="#exampleModal2", а exampleModal2 мы взяли
с айди модельного окна и обязательно с # что бы сказать что это айди */

/* В самом коде нужно перебрать все data-toggle="modal" и определить какое мод окно нужно открыть */
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => { // мы не знаем какой это будет элемент, если ссылка то нужно отменить соб браузера
            e.preventDefault();
           $(target).fadeIn(1000);
           
        // Добавим фционал когда мод окно открыто мы не можем пролистывать страничку под мод окном
        document.body.style.overflow = "hidden";
        });
    }

    // Добавим закрытие мод окна
    const closeElements = document.querySelectorAll('[data-close]'); // мы его установили как для крестика так и для закрытия модалки
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(1000);
            document.body.style.overflow = "";
        });
    });

    // Закрытие на подложку мод окна
/* Кликая на подложку мы  будем кликать на класс modal, нужно отследить когда мы на него кликаеи и закрывать мод окно */
    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) { // Если клик в класс модал то будет закрытие
            $('.modal').fadeOut(1000);
            document.body.style.overflow = "";
        }
    });
};

$('[data-toggle="modal"]').modal(); /* В доллар нужно поместить селектор data-toggle потому что, этот элемент я буду добавлять во все элементы
которые будут вызвать модельные окна. По этому инициализация будет идти по этим элементам data-toggle="modal" */