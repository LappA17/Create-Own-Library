import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () { // вешаем на дивы метод клика который мы создали ранее, передаем коллбек фцию
    console.log($(this).index()); // this тот элемент на котором был клик
});

/* Задача внутри 3го дива найти дивы в селектором more */
console.log($('div').eq(2).find('.more'));
// На страницу в консоле будет объект с нужным нам селектором