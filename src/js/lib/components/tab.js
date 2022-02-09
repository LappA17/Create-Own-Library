import $ from '../core';

$.prototype.tab = function()  {
    for (let i = 0; i < this.length; i++) {
        /* Нам нужно получить tab-item, весь этот скрипт для него. Мы пишем $('[data-panel]'), и внутри ищем tab-item */

        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab-item--active').siblings().removeClass('tab-item--active')
                .closest('.tab').find('.tab-content').removeClass('tab-content--active')
                .eq($(this[i]).index()).addClass('tab-content--active')
/* Это к первому там где начало addClass.После клика на таб я хочу добавить ему класс активности.
Но при клике на один таб и назначая ему элемент активности - нам нужно у всех остальных табов его убрать, для этого 
нам нужно получить его соседей и это метод siblings */

/* Второе. Теперь нужно поработать с контентом, что бы перемиститься с таб-айтем в таб-контент. И проще всего это найти
родителя у которого есть определенный класс, например tab. Мы перейдем в таб и потом из общего родителя сможем
обратиться уже к контенту. closest - находим ближайшего родителю по селектору
Дальше убираем класс активности у всех элементов и добавить нужному */

/* Теперь самоя тяжелое: найти номер того элемента(this[i]), а именно табов, например мы кликнули в контент 2 - то 
это второй элемнет и эту цыфру которая по номеру содержиться нужно передать дальше.
eq - среди элементом табконтент мы будем использовать элемент по определенному номеру
$(this[i]) - это мы получаем элемент на который пользователь у нас кликнул 
eq и index - методы которые мы создавали*/
        });
    }
};

$('[data-tabpanel] .tab-item').tab();