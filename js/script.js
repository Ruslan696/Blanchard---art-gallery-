document.addEventListener('DOMContentLoaded', function () {
  // tabs
  document.querySelectorAll('.list-hidden').forEach(function (list) {
    list.classList.remove('is-active')
  })
  document.querySelectorAll('.nav-site__btn').forEach(function (navSite) {
    navSite.classList.remove('is-active')
  })
  document.querySelectorAll('.nav-site__btn').forEach(function (navBtn) {
    navBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.list-hidden').forEach(function (list) {
        list.classList.remove('is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
    })
  })
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var container = $(".list-hidden.is-active");
      if (e.target != container[0] && !container.has(e.target).length) {
        document.querySelectorAll('.list-hidden.is-active').forEach(function (list) {
          list.classList.remove('is-active')
        });
        document.querySelectorAll('.nav-site__btn').forEach(function (navSite) {
          navSite.classList.remove('is-active')
        })
      }
    });
  });
  jQuery(function ($) {
    $('.nav-site__btn').on('click', function () {
      $('.nav-site__btn').removeClass('is-active')
      $(this).addClass('is-active')
    })
  });

  // burger
  document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.add('is-active')
    document.querySelector('.body').classList.add('is-hidden')
  });
  document.querySelector('.menu-btn_768').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.add('is-active')
    document.querySelector('.body').classList.add('is-hidden')
  });
  document.querySelector('.menu-btn_mobile').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.add('is-active')
    document.querySelector('.body').classList.add('is-hidden')
  });
  document.querySelector('.burger-menu__btn').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.remove('is-active')
    document.querySelector('.body').classList.remove('is-hidden')
  });
  document.querySelectorAll('.burger-menu__link').forEach(function (burgerLink) {
    burgerLink.addEventListener('click', function () {
      document.querySelector('.burger-menu').classList.remove('is-active')
      document.querySelector('.body').classList.remove('is-hidden')
    })
  });

  // search
  document.querySelector('.search-btn').addEventListener('click', function () {
    document.querySelector('.search-box').classList.add('is-active')
  });
  document.querySelector('.search-box__close-btn').addEventListener('click', function () {
    document.querySelector('.search-box').classList.remove('is-active')
  });

  // swiper hero
  const swiper = new Swiper('.hero', {
    loop: true,
    spaceBetwwen: 30,
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
    },
    speed: 2000,
  });

  // swiper gallery
  const gallerySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    speed: 500,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
        loop: false,
      },
      916: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        loop: false,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        loop: false,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'gallery__swiper-button-disabled',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    }
  });

  // pop-up gallery
  document.querySelectorAll('.gallery__swiper-slide').forEach(function (gal) {
    gal.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.pop-up').forEach(function (step) {
        step.classList.remove('is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
      document.querySelector('.body').classList.add('is-hidden')
    })
  });
  document.querySelectorAll('.pop-up__close-btn').forEach(function (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', function () {
      document.querySelectorAll('.pop-up').forEach(function (popUpClose) {
        popUpClose.classList.remove('is-active')
      })
      document.querySelector('.body').classList.remove('is-hidden')
    })
  });
  document.querySelectorAll('.pop-up').forEach(function (popup) {
    popup.addEventListener("click", function (e) {
      let target = e.target;
      if (target.querySelector(".pop-up.is-active .pop-up__content")) {
        document.querySelector('.pop-up.is-active').classList.remove("is-active")
        document.querySelector('.body').classList.remove('is-hidden')
      }
    });
  })

  // select
  const element = document.querySelector('#gallery-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    placeholder: true,
  });

  // accordion
  jQuery(function ($) {
    $(function () {
      $("#accordion").accordion({
        collapsible: true,
        active: 0,
        icons: false,
        heightStyle: "content"
      })
    });
  });

  // tabs accordion
  document.querySelectorAll('.accordion__btn').forEach(function (accBtn) {
    accBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.person').forEach(function (step) {
        step.classList.remove('person_is-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('person_is-active')
    })
  });
  document.querySelector('.person_open').classList.add('person_is-active');
  document.querySelector('.accordion__btn[data-path="dominiko"]').classList.add('is-active');
  jQuery(function ($) {
    $('.accordion__btn').on('click', function () {
      $('.accordion__btn').removeClass('is-active')
      $(this).addClass('is-active')
    });
  });

  // accordion scroll
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelectorAll('.accordion__btn').forEach(function (accordBtn) {
      accordBtn.addEventListener('click', function (scroll) {
        const path = scroll.currentTarget.dataset.path
        document.querySelector(`[data-target="${path}"]`).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })
  };

  // swiper events
  const eventsSwiper = new Swiper('.events__swiper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loopFillGroupWithBlank: true,
    speed: 600,
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
        loopFillGroupWithBlank: true,
      },
      916: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27,
        loopFillGroupWithBlank: true,
      },
      1200: {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
    pagination: {
      el: '.events__swiper-pagination',
      clickable: true,

    },
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
      hideOnClick: true,
    },
    disabledClass: 'events__swiper-button-disabled',
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
      paginationBulletMessage: 'Показать слайд {{index}}'
    },

  });

  // tooltip
  tippy('.projects__tooltip_1', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    theme: 'color',
  });

  tippy('.projects__tooltip_2', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    theme: 'color'
  });

  tippy('.projects__tooltip_3', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    theme: 'color'
  });

  // swiper partners
  const partnersSwiper = new Swiper('.partners__swiper', {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    loopFillGroupWithBlank: true,
    speed: 500,
    breakpoints: {
      470: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      915: {
        loop: false,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      1200: {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },
      1600: {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: '.partners__swiper-button-next',
      prevEl: '.partners__swiper-button-prev',
      disabledClass: 'partners__swiper-button-disabled'
    },
    a11y: {
      paginationBulletMessage: 'Показать слайд {{index}}',
      nextSlideMessage: 'Следующий слайд',
      prevSlideMessage: 'Предыдущий слайд',
    }
  });

  jQuery(function ($) {
    $('.form__input').on('click', function () {
      $('.form__input').removeClass('is-active')
      $(this).addClass('is-active')
    });
  });

  // map
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.758932176620256, 37.614866393308056],
      zoom: 14
    });

    var myPlacemark = new ymaps.Placemark([55.758932176620256, 37.614866393308056], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map_marker.svg',
      iconImageSize: [20, 20],
    });

    myMap.geoObjects.add(myPlacemark);
  }

  // link scroll
  jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
      var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
      if (theHref && location.href.replace(/#.*/, '') != theHref) return;
      var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
      if (!$target.length) return;
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 600, 'swing', function () {
        window.location.hash = hash;
      });
    });
  });

  // Form__Mask
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);


  // validation
  const validation = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#D11616'
    },
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено')
          }
        }
      }
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
    }
  });
  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Как Вас зовут?',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя слишком короткое'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя слишком длинное'
      },

    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Укажите Ваш телефон'
      },
      {
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10;
        },
        errorMessage: 'Неверно задан телефон'
      }
    ])
})
