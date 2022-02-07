import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
$('button').fadeIn(1800); //  Теперь кнопка баттон появляется если fadeIn или исчезает если fadeOut через 1800 мс

// console.log($('button').html('Hello'));