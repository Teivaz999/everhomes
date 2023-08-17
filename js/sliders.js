document.addEventListener('DOMContentLoaded', ()=> {
const mProject = document.querySelector('.slaider');
if(mProject) {
const mainProject = new Swiper(mProject, {
    loop: true,
    /* autoplay:true, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
const mBlog = document.querySelector('.blog__slaider');
if(mBlog){
const mainBlog = new Swiper(mBlog, {
  loop: true,
  slidesPerView:3,
  spaceBetween:32,
  navigation: {
    nextEl: '.similar-button-next',
    prevEl: '.similar-button-prev',
  },
  /* autoplay:true, */
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1020: {
      slidesPerView: 2.5,
      spaceBetween: 32
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 50
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});
}

const projectDetailTop = document.querySelector('.mySwiper');
if(projectDetailTop){
const swiper = new Swiper(projectDetailTop, {
  spaceBetween: 32,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      spaceBetween: 32
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 33
    },
  }
});

const swiper2NextButton = document.querySelector('.swiper-button-next-2');
const swiper2PrevButton = document.querySelector('.swiper-button-prev-2');

if (swiper2NextButton && swiper2PrevButton) {
  swiper2NextButton.addEventListener('click', function () {
    swiper.slideNext();
    swiper2.slideNext();
  });

  swiper2PrevButton.addEventListener('click', function () {
    swiper.slidePrev();
    swiper2.slidePrev();
  });
}
}

const swiper2 = new Swiper('.mySwiper2', {
loop:true,
slidesPerView: 1,
spaceBetween: 32, 
centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: projectDetailTop,
  }
});



const swiperProperty = document.querySelector('.swiperProperty');
if(swiperProperty){
const swiperProp = new Swiper(swiperProperty, {
  direction:'vertical',
  spaceBetween: 22,
  slidesPerView: 2,
  /* freeMode: true,
  watchSlidesProgress: true, */
});
}

/* var mainSwiper = new Swiper('.swiper-container', {
  // настройки основного свайпера
  thumbs: {
    swiper: {
      el: '.swiper-container-thumbs', // контейнер для thumbs
      slidesPerView: 'auto', // автоматическое определение количества thumbs
    }
  },
  on: {
    slideChange: function () {
      // Получаем индекс активного слайда в основном свайпере
      var activeSlideIndex = this.activeIndex;
      
      // Обновляем активный слайд в thumbs-свайпере
      thumbsSwiper.slideTo(activeSlideIndex);
    }
  }
});

// Инициализация thumbs-свайпера
var thumbsSwiper = new Swiper('.swiper-container-thumbs', {
  // настройки thumbs-свайпера
}); */

const swiperProperty2 = new Swiper('.swiperProperty2', {
spaceBetween: 32, 
 touchRatio:1,
 loop:true,
 /* allowTouchMove: true, */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: swiperProperty,
  },
  on: {
    slideChange: function () {
      var activeSlideIndex = this.activeIndex;
      thumbsSwiper.slideTo(activeSlideIndex);
    }
  }
});

var swiper = new Swiper('.swiper-main', {
  loop: true, // Чтобы можно было бесконечно перемещаться между слайдами
  initialSlide: Math.floor(Math.random() * 7),
  autoplay:{
    delay:5000,
  },
  speed:1000,
  effect: "fade",
  });

  /* swiper.on("slideChange", function () {
    const randomSlideIndex = Math.floor(Math.random() * swiper.slides.length);
    swiper.slideTo(randomSlideIndex); // Переключаемся на случайный слайд при каждой смене слайда
  });
  swiper.on("init", function () {
    const randomSlideIndex = Math.floor(Math.random() * swiper.slides.length);
    setTimeout(function () {
      swiper.slideTo(randomSlideIndex);
    }, 5000);
  }); */


const placeSlider = new Swiper('.place-slider', {
  loop:true,
  navigation: {
    nextEl: '.place-button-next',
    prevEl: '.place-button-prev',
  },
  pagination: {
    el: '.place-pagination',
    clickable: true,
  },
})

const placeSlider2 = new Swiper('.place2-slider', {
  loop:true,
  navigation: {
    nextEl: '.place-button-next',
    prevEl: '.place-button-prev',
    clickable:true
  },
  pagination: {
    el: '.place-pagination',
    clickable: true,
  },
})


const placeSlider3 = new Swiper('.place3-slider', {
  loop:true,
  navigation: {
    nextEl: '.place-button-next',
    prevEl: '.place-button-prev',
  },
  pagination: {
    el: '.place-pagination',
    clickable: true,
  },
})

const similarProjects = new Swiper('.similar-projects', {
  slidesPerView: 3,
  spaceBetween:32,
  loop:true,
  navigation: {
    nextEl: '.similar-button-next',
    prevEl: '.similar-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    320: {
      slidesPerView: 1,
    },
  }
})

const otherProjects = new Swiper('.other-projects', {
  loop:true,
  slidesPerView: 3,
  /* slidesOffsetBefore:10, */
  navigation: {
    nextEl: '.similar-button-next',
    prevEl: '.similar-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesOffsetBefore:0
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 32,
      slidesOffsetBefore:0
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
      slidesOffsetBefore:0
    },
  }
})


const projectDetail = document.querySelector('.insideSwiper');
if(projectDetail){
const inside = new Swiper(projectDetail, {

  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  /* breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 100
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 50
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  } */
});
}



const inside2 = new Swiper('.insideSwiper2', {
  loop:true,
  slidesPerView:"auto",
initialSlide: 1,
spaceBetween: 16, 
 /* slidesOffsetBefore: 32, */
 /* slidesOffsetAfter: 32, */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1030: {
      spaceBetween: 32,
    },
    769: {
      spaceBetween: 16,
    },
    320: {
      spaceBetween:8,
    }
  },
  thumbs: {
    swiper: {
      el:projectDetail,
      slidesPerView:5,
      spaceBetween:32,
      breakpoints: {
        1000: {
          spaceBetween: 32,
        },
        769: {
          spaceBetween: 16,
        },
        320: {
          spaceBetween:3,
        }
      }
    }
  },
});



const insideBlog = document.querySelector('.blog-inside__slaider');
if(insideBlog){
const blogInside = new Swiper(insideBlog, {
  loop: true,
  slidesPerView:3,
  spaceBetween:32,
  /* autoplay:true, */
  navigation: {
    nextEl: '.similar-button-next',
    prevEl: '.similar-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 100
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});
}

});
