import $ from './lib/lib';

/* ТЕПЕРЬ ИЗ-ЗА МЕТОДА fadeToggle ПРИ НАЖАТИЕ ТЕКСТ ПРОПАДАЕТ КОГДА ОН БЫЛ, А КОГДА ЕГО НЕ БЫЛО ПОСЛЕ НАЖАТИЯ НА КНОПКУ - ОН ПОЯВЛЯЕТСЯ */
// Пропадет первый текст
$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800); // eq(1), потому что это второй элемент, первый это див с контейнером
});

// Пропадет второй текст
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

// Все два текста пропадут
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

/* Представь что нам нужно формулировать верстку динамически на основание того что нам приходит с бекенда 
Скрипты которые были до этого не применяться вот к этой вот верстки. Те при клике ничего не произойдет на него.
Но если мы подставим $('.dropdown-toggle').dropdown() после врапа то менюшка будет работать */
$('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action2</a>
                <a href="#" class="dropdown-item">Action3</a>
            </div>
        </div> 
    `
);
$('.dropdown-toggle').dropdown();