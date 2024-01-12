const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false ,
    /* відключає рідні стрілки і точки перемотки */
    controls: false,
    nav: false
      
  });

 /*  назначаєм дію через методи що повинні робити червоні стрілки так як вони не є частиною слайдера а стоять поза ним в html */
 /*  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  більш сучасний вигляд буде через addEventListener */
  document.querySelector('.prev').addEventListener('click',  function () { slider.goTo('prev');});

  document.querySelector('.next').addEventListener('click',  function () { slider.goTo('next');});



