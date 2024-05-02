

(function ($) {
  "use strict";

  // Get Device width
  let device_width = window.innerWidth;

  /////////////////////////////////////////////////////
  // 00. Preloader
  $(document).ready(function () {
    $('.preloader').hide();
  });
  /////////////////////////////////////////////////////

  // 07. Data backgrond
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  /////////////////////////////////////////////////////
  // HERO - 9

  var testimonial_4 = new Swiper(".hero-9", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });



  /////////////////////////////////////////////////////
  // 01. Cursor Animations

  // Home Page Client Cursor
  var client_cursor = document.getElementById("client_cursor");

  // Team Page Team Cursor
  var team_cursor = document.getElementById("team_cursor");

  // Portfolio  Cursor
  var portf_cursor_6 = document.getElementById("portf_cursor_6");

  // Featured  Cursor
  var featured_cursor = document.getElementById("featured_cursor");

  var portfolio4_cursor = document.getElementById("portfolio4_cursor");



  /////////////////////////////////////////////////////
  // 02. Offcanvas 
  $("#open_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '1');
    $('.offcanvas__area').css('visibility', 'visible');
  });
  $("#close_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '0');
    $('.offcanvas__area').css('visibility', 'hidden');
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 03. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
 

 


 


  
  // =========================================================
  // Image Hover
  const hover_title = document.querySelectorAll(".hover_wrap");

  if (hover_title) {
    function hoverImgFunc(event, hover_title) {
      const contentBox = hover_title.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    hover_title.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(hoverImgFunc(event, item), 1000);
      });
    });
  }
  

 


 
  /////////////////////////////////////////////////////
  // Activate MixitUp
  let mixitup_17 = document.querySelector('.showcase-mixitup');
  if (mixitup_17) {
    var mixer = mixitup('.showcase-mixitup');
  }


  

  




})(jQuery);

