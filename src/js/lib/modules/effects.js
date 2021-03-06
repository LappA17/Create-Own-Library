import $ from "../core";

$.prototype.animateOverTime = function(dur, cb, fin) {
/* Фция будет принимать три аргумента
1) Как долго будет выполняться эта анимация
2) Callback 
3) Fin - фция финальная уже после того как анимация отработала */

    let timeStart; /* На неё мы будем ориентироваться, те когда фция запускается первый раз, здесь ничего не будет, это значит
что наша анимация запускается только и мы будем брать начальный параметр из другой фции */

    function _animateOverTime(time) { /* Отдельная фция для РЕКВЕСТАНИМЕЙШЕНФРЕЙВ. Техническая фция, нам ее трогать не нужно */
        if (!timeStart) {
            timeStart = time;
        } // Первичная установка временных промежутков

        // Нужно каждый раз вычеслять а сколько времени прошло, какая ее анимация, какой прогресс
        let timeElapsed = time - timeStart; /* Фция _animateOverTime будет запускаться каждый раз через определенный интервал времени
У нас каждый раз эта фция будет получать аргумент time, он нам приходит автоматически(мы его не контролируем), и мы можем использовать
time в нашем скрипте. Сначала когда анимация только запускатся мы в переменую timeStart записываем time(там будет очень маленькое
значение и мы от него будет отталкиваться). У нас есть переменная отслеживания анимации timeElapsed. Здесь мы берем время которое
изменяется time (4,8 или 12 мс , те оно увеличивается) и каждый раз мы будем отнимать timeStart(время начала анимации) и это позволит
нам отслеживать прогресс КОТОРЫЙ МЫ БУДЕМ ИСПОЛЬЗОВАТЬ */

        let complection = Math.min(timeElapsed / dur, 1); /* Будет отвечать за изменения параметров на странице
Math.min(timeElapsed / dur - вот здесь будет изменятся изменения opacity( c 0.01 до 1), но как только у нас значение перешигнет 1чку
то мы с вами не будем подставлять это значение которое перешагнет за 1, а ПОДСТАВИМ ИМЕННО 1, ПОТОМУ ЧТО 1 ЭТО ГРАНИЧНОЕ ЗНАЧЕНИЕ
НАШЕГО ОПАСИТИ */

        cb(complection); /* complection будем использовать в КОЛЛБЕКЕ, которая запускается после запуска анимации. Те теперь при
каждом запуске этой фции у нас будет изменяться опасити */

        // Условие конца анимации
        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else { /* fin должен запуститься только тогда когда анимация закончилась и блок else за это будет отвечать */
            if (typeof fin === 'function') {
                fin(); // обычный колбек после окончания анимации
            }
        }
    } 
    
    return _animateOverTime; /* Это техническая фция которая будет использоваться в других методах и для того что бы ее правильно 
и красиво использовать, мы ее просто возвращаем */
};

$.prototype.fadeIn = function(dur, display, fin) { // Это аргументы которые принимает метод fadeIn
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || "block"; // Если display не была передана то подставиться просто block

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        }; /* Эта фция когда будет запускаться, будет принимать в себя тот complection который мы рассчитывали в АНИМЕЙТЕДОВЕРТАЙМ
let complection = Math.min(timeElapsed / dur, 1) И ИЗМЕНЯТЬ НАШ ОПАСИТИ ОТ НУЛЯ ДО 1.
    ЗАМЕТЬ ЧТО МЫ ОБЯЗАТЕЛЬНО ИСПОЛЬЗУЕМ СТРЕЛОЧНУЮ ФЦИЮ ТАК КАК НАМ НУЖЕН КОНТЕКСТ ВЫЗОВА this , МЫ ВСЕ ТАК ЖЕ РАБОТАЕТ С ТЕМ ЖЕ
ОБЪЕКТОМ С КОТОРЫМ МЫ РАБОТАЛИ */

        // Теперь из прототипа нашего объекта вытащим фцию АНИМЕЙТЕДОВЕРТАЙМ
        const ani = this.animateOverTime(dur, _fadeIn, fin); /* Первый аргумент - скорость воспроизведение анимации, передается только 
тогда когда будет передаваться метод fadeIn.
Второй аргумент - эта та фция коллбек которая будет запускаться после запуска анимации
Третий - коллбек после окончания анимации */

        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(dur, fin) { // display не нужен потому что я скрываю элементы
    for (let i = 0; i < this.length; i++) { 

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection; //  Это значит что элемент будет становиться все прозрачнее от 1 до 0, пчто complection будет увеличиваться
            if(complection === 1) {
                this[i].style.display = 'none';
            } // Если элемент стал полностью прозрачный, то мы его скрываем со страницы
        }; 

        const ani = this.animateOverTime(dur, _fadeOut, fin);

        requestAnimationFrame(ani);
    }

    return this;
};

// Создадим анимацию что бы код автоматическо определял НАМ НЕОБХОДИМО ПОКАЗАТЬ ИЛИ СКРЫТЬ ЭЛЕМЕНТ
$.prototype.fadeToggle = function(dur, display, fin) { 
    for (let i = 0; i < this.length; i++) {

// Создадим вилку : показан ли данный элемент который сейчас перебирается на странице в текущий момент
/* Сейчас мы не можем проверить инлайн стили, те мы не можем обратиться к параметру style и display у объекта this, потому что в верстке
обычно прописаны не инлайн стили, а стили прописани в css коде. И сейчас мы должны понять показан ли элемент на странице.
Сейчас зайдя на страничку и выделя любой элемент в консоли нам покажут computed, мы на нее переходим и мы уведим какие свойства есть у 
этого элемента и их мы можем получить с помощью метода getComputedStyle.
 */
        if(window.getComputedStyle(this[i]).display === "none") { /* если элемент скрыт то будет появлятся вся эта анимация для 
появления элемента на страничке, те функция fadeIn ! */
            this[i].style.display = display || "block"; 

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            }; 

            const ani = this.animateOverTime(dur, _fadeIn, fin); 
            requestAnimationFrame(ani);
        } else { // сюда поместим весь код с функции fadeOut !
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if (complection === 1) {
                    this[i].style.display = 'none';
                }
            };
    
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
        }
    }

    return this;

};
