// opilsol-N4 [Exlq31BRg5]
(function() {
  $(".opilsol-N4").each(function() {
    const $block = $(this);
    const el = $(".opilsol-N4 .visual-container .control-wrap");
    const txtBox = $(".opilsol-N4 .visual-swiper .visual-text-box");
    $(function() {
      var visualSwiper = new Swiper(".opilsol-N4 .visual-swiper", {
        speed: 600,
        parallax: true,
        loop: true,
        allowTouchMove: false,
        touchEventsTarget: "wrapper",
        slidesPerView: "auto",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".opilsol-N4 .visual-swiper .control-wrap .swiper-pagination",
          clickable: "true",
        },
        on: {
          init: function() {
            $(".opilsol-N4 .visual-swiper .control-wrap .pagination_fraction .all").text(("0" + this.loopedSlides).slice(-2));
          },
          slideChangeTransitionStart: function() {
            $(".opilsol-N4 .visual-swiper .control-wrap .pagination_fraction .current").text("0" + (this.realIndex + 1)).slice(-2);
          },
        },
      });
      if ($(".visual-swiper").length > 0) {
        $(window).on({
          load: function() {
            boxHeight();
          },
          resize: function() {
            boxHeight();
          },
          keyup: function(e) {
            if (e.keyCode == 116 || (e.ctrlKey == true && e.keyCode == 82)) {
              boxHeight();
            }
          },
        });
      }
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
      if (isMobile) {
        $(".opilsol-N4 .visual-container .pagination_fraction").css({
          top: "-6rem",
        });
        $(".opilsol-N4 .visual-container .control-bottom").css({
          bottom: "-8rem",
        });
      }
      // Swiper Play, Pause Button
      const pauseButton = $block.find(".swiper-button-pause");
      const playButton = $block.find(".swiper-button-play");
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function() {
        visualSwiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function() {
        visualSwiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });

    function boxHeight() {
      const el = $(".opilsol-N4 .visual-container .control-wrap");
      const txtBox = $(".opilsol-N4 .visual-swiper .visual-text-box");
      el.css({
        height: txtBox.height(),
        transition: "all .5s ",
      });
      $(".load").text(el.position().top);
    }
  });
})();
// opilsol-N5 [Uslq31bRGY]
(function() {
  $(function() {
    var swiper = new Swiper(".opilsol-N5 .slide-container", {
      // loop: "true",
      allowTouchMove: false,
      touchEventsTarget: "wrapper",
      navigation: {
        nextEl: ".opilsol-N5 .swiper-button-next",
        prevEl: ".opilsol-N5 .swiper-button-prev",
      },
      /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, */
      breakpoints: {
        320: {
          slidesPerView: 1.1446,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.427,
          spaceBetween: 20,
        },
        922: {
          slidesPerView: 3.232,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 3.75,
          spaceBetween: 40,
        },
      },
    });
    $(".opilsol-N5 .slide-container .swiper-slide").hover(function() {
      swiper.autoplay.stop();
    }, function() {
      swiper.autoplay.start();
    });
  });
})();
// opilsol-N8 [ZBlq31BRIr]
(function() {
  $(function() {
    var swiper = new Swiper(".opilsol-N8 .slide-container", {
      // loop: "true",
      allowTouchMove: false,
      touchEventsTarget: "wrapper",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".opilsol-N8 .swiper-button-next",
        prevEl: ".opilsol-N8 .swiper-button-prev",
      },
      breakpoints: {
        360: {
          slidesPerView: 1.1,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        922: {
          slidesPerView: 3.182,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 2.75,
          spaceBetween: 30,
        },
      },
    });
    $(".opilsol-N8 .slide-container .swiper-slide").hover(function() {
      swiper.autoplay.stop();
    }, function() {
      swiper.autoplay.start();
    });
  });
})();