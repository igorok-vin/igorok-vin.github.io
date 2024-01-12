$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  /*  $(".catalog-item__link").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });

  
  $(".catalog-item__back").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  }); */

  /*теж саме що і зверху але оптимізовано через змінну item при визові функції підставляється чи .catalog-item__back чи .catalog-item__link*/
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //модальні вікна
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
  });

  //eq(i) - отримання елемента попорядку
  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__description").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });

  /*валідація форм через js з плагіном jquery validate.
  Так як метод validate() працює тільки на самій першій формі з селектором feed-form а всі інші форми з цим селектором ігнорує. Через те до форм додають унікальний індитифікатор але щоб їх кожен раз не створювати можна використати селектори вкладеності(блок з id і вньому беремо форму тобто тег form)*/
  /* Замість вимоги required в html в формах можна прописати правила тут через скрипт для кожного поля форми  */
  /*  $("#consultation form").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      },
    }, */
  /* зміна діфолтних повідомлень в модальних вікнах */
  /*   messages: {
      name: "Вкажіть своє імя",
      phone: "Вкажіть свій телефон",
      email: {
        required: "Нам потрібна електронка для звязку",
        email: "Імеіл має відповідати стандарту name@domain.com",
      },
    },
  }); */
  /* $("#order form").validate(); */
  /* тільки ця форма через валідірується через id */
  /* $("#consultation-form").validate(); */

  /* щоб не вставляти однаковий код валідації форми для всіх форм робимо через фунцію */
  function validateForms(formForValidation) {
    $(formForValidation).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      /* зміна діфолтних повідомлень в модальних вікнах */
      messages: {
        name: "Вкажіть своє імя",
        phone: "Вкажіть свій телефон",
        email: {
          required: "Нам потрібна електронка для звязку",
          email: "Імеіл має відповідати стандарту name@domain.com",
        },
      },
    });
  }
  /* визов прописаної фунції валідації для кожної форми */
  validateForms("#consultation form");
  validateForms("#order form");
  validateForms("#consultation-form");

  $("input[name=phone]").mask("+9 (999) 999-99-99");

  /* обробка email листів в формах на основі технології ajax тобто без перезавантаження сторінки*/
  /*тут знаходимо всі форми які є на сайті*/
  $("form").submit(function (e) {
    e.preventDefault(); //відключаєм стандартну поведінку браузера і з ajax при відправці email сторінка не буде перегружатись
    /*перевірка чи форма пройшла попередню валідацію щоб не відправляти пусту форму*/
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST", //команда відправка даних на сервер
      url: "mailer/smart.php", //обробник даних які відправляються на сервер
      data: $(this).serialize(), //самі данні які відправляються на сервер

      //якщо все проходить успішно то відповідь поміщаєм в done і зявиться модальне вікно з повідомленням про успішність операції
    }).done(function () {
      /*після відправки форми очищаєм всі input*/
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut("slow"); //після відправки пісьма модальні вікна закриваються
      //і саме останнє коли все відправилось виводиться задній фон і вікно проуспішну відправку
      $(".overlay, #thanks").fadeIn("slow");
      /*обновляєм форми*/
      $("form").trigger("reset");
    });
    return false;
  });

  /* Для  плавного скролла по ссылкам "вверх". Браузер відслідковує скільки пікселів сайту пролистано то встіновимо що після 1600 пікселів зявляється стрілка для переходу вверх сайта до блока  promo */
  /*  window - це весь екран, scroll - операція яку робить юзер */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  /*  для плавності переходу наверх сторінки */
  /*a[href^='#'] - ссилка яка має атрибут в href і починається(^) з #up */
  $("a[href='#up']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
