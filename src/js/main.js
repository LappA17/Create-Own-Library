import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () { 
    console.log($(this).index()); 
});

// console.log($('div').eq(2).find('.more'));

/* Мы главному диву, в котором все другие дивы добавили класс findme и допустим я хочу по селектору some найти родителя
по селектору findme  */
//console.log($('.some').closest('.findme')); 
/* ./src/js/lib/core.js.$.init
0: div.findme
1: div.findme
2: div.findme
length: 3
[[Prototype]]: Object
Мы использовали фцию доллара на всех блоках some и у каждого из этих блоков мы попытались найти ближайший блок
с классом findme и мы получили три раза одно и тоже значение потому что один родитель */

console.log($('.more').eq(0).siblings()); // Этот метод не требует какого-то селектора
/* ./src/js/lib/core.js.$.init {0: div.some, 1: div.some, 2: div.some, 3: div.more, length: 4}
0: div.some
1: div.some
2: div.some
3: div.more
length: 4
[[Prototype]]: Object 
ПОЛУЧУ ВСЕХ СОСЕДЕЙ ЭТОГО 0 ДИВА
А если пропишем не .more а findme то получим и кнопку, и див с классом актив, и скрипт, те все что внутри бади по родителю подходит*/