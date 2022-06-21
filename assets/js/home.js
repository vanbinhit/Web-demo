
$(document).ready(function(){
  $('.image-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable:true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        },
  },
    ]
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});



/ login Dang ky/
 document.querySelector("#top-bar-dangky").addEventListener("click",function(){
     document.querySelector("popup").classList.add("active");
 });
 document.querySelector(".popup .close").addEventListener("click",function(){
    document.querySelector("popup").classList.remove("active");
});


