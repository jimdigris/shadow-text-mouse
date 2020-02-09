'use strict';

(function () {
    const INITIAL_SCREEN = document.querySelector('#initialScreen');
    const NAME_GAME_SHADOW = document.querySelector('#nameGameShadov');

    NAME_GAME_SHADOW.style.left = NAME_GAME_SHADOW.offsetLeft + 'px';
    NAME_GAME_SHADOW.style.top = NAME_GAME_SHADOW.offsetTop + 'px';

    let shadow = {
        x: parseInt(NAME_GAME_SHADOW.style.left),
        y: parseInt(NAME_GAME_SHADOW.style.top),
        xOld: parseInt(NAME_GAME_SHADOW.style.left),
        yOld: parseInt(NAME_GAME_SHADOW.style.top),
        direction: ''
    }

    let cursor = {
        x: 0,
        y: 0,
        xOld: 0,
        yOld: 0
    }


    // ---


    INITIAL_SCREEN.addEventListener('mousemove', function (event) {
        getShadowСoordinates();         // получаем координаты тени
        getMouseСoordinates(event);     // получаем координаты курсора
        getDirectionMoveCursor();       // получаем направление движения курсора
        setDirectionMoveShadow();       // двигаем тень
    });


    // ---

    // определяем координаты тени до изменения
    function getShadowСoordinates() {
        shadow.x = parseInt(NAME_GAME_SHADOW.style.left);
        shadow.y = parseInt(NAME_GAME_SHADOW.style.top);
    }

    // определяем координаты курсора
    function getMouseСoordinates(event) {
        cursor.x = event.clientX;
        cursor.y = event.clientY;
    }

    // направление движения курсора
    function getDirectionMoveCursor() {
        if (cursor.x > cursor.xOld + 1) {
            cursor.xOld = cursor.x;
            shadow.direction = 'right';
        }
        if (cursor.x < cursor.xOld - 1) {
            cursor.xOld = cursor.x;
            shadow.direction = 'left';
        }
        if (cursor.y < cursor.yOld - 1) {
            cursor.yOld = cursor.y;
            shadow.direction = 'top';
        }
        if (cursor.y > cursor.yOld + 1) {
            cursor.yOld = cursor.y;
            shadow.direction = 'bottom';
        }
    }

    // двигаем тень
    function setDirectionMoveShadow() {
        switch (shadow.direction) {
            case 'right':
                shadow.x -= 1;
                break;

            case 'left':
                shadow.x += 1;
                break;

            case 'top':
                shadow.y += 1;
                break;

            case 'bottom':
                shadow.y -= 1;
                break;
        }

        // ограничеваем тень
        if (shadow.x <= shadow.xOld - 4) { shadow.x = shadow.x + 1 }
        if (shadow.x >= shadow.xOld + 4) { shadow.x = shadow.x - 1 }
        if (shadow.y <= shadow.yOld - 4) { shadow.y = shadow.y + 1 }
        if (shadow.y >= shadow.yOld + 4) { shadow.y = shadow.y - 1 }


        // сдвигаем тень
        NAME_GAME_SHADOW.style.left = shadow.x + 'px';
        NAME_GAME_SHADOW.style.top = shadow.y + 'px';
    }



})();