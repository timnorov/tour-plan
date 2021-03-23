$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = $(".menu-button");
menuButton.on('click', function() {
  $(".navbar-bottom").toggleClass("navbar-bottom--visible");
});

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() { 
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")
   }

   function closeModal(event) {
    event.preventDefault() 
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")
   }
});

   $(document).keydown(function(e) { 
    if (e.keyCode === 27) { 
        $("#modal__overlay").removeClass("modal__overlay--visible");
        $("#modal__dialog").removeClass("modal__dialog--visible");
    } 
});


$(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
    messages: {
    name: {
      required: "Please specify your name",
      minlength: "Name should be at least 2 letters long",
    },
    email: {
      required: "Please specify your email",
      minlength: "Please use format of name@domain.com",
    },
    phone: {
      required: "Please specify your phone",
      minlength: "Please enter the full number",
    },
    message: "Please write down your message",
  },
  });
  AOS.init({
    disable: 'mobile',
  });
});

$(document).ready(function(){
  $(".phone").mask("+7 (999) 999-99-99");
});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });