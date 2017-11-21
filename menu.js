/* Открытие меню */
var main = function() { //главная функция
    $('.icon-menu').click(function() { //выбираем класс icon-menu и добавляем метод click с функцией, вызываемой при клике
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
        }, 300); //скорость движения меню в мс
        
        $('body').animate({ //выбираем тег body и метод animate
            left: '0' //чтобы всё содержимое также сдвигалось вправо при открытии меню, установим ему положение 285px
        }, 300); //скорость движения меню в мс
    });


/* Закрытие меню */
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
        $('.menu').animate({ //выбираем класс menu и метод animate
            left: '-285px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 300); //скорость движения меню в мс
        
    $('body').animate({ //выбираем тег body и метод animate
            left: '0px' //а содержимое страницы снова вернется в положение 0px
        }, 300); //скорость движения меню в мс
    });
};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню


 function sliderBackgroundBody() {
      window.currBg = window.currBg + 1;
      if (!window.currBg || window.currBg > 3) window.currBg = 1;
      $('.main-head').fadeOut(500, function() {
        $(this).css('background-image', 'url(img/header_bg' + window.currBg + '.png)').fadeIn(500);
      });
      setTimeout(sliderBackgroundBody, 4000);
    }
    $(document).ready(function() {
      sliderBackgroundBody();
    });
