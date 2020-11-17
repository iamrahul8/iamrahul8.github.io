// Created by rahul

window.onscroll = function() {
    var pos =  document.documentElement.scrollTop;
    var calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scroll = pos * 100 / calc_height;
    document.getElementById("progress").style.width= scroll + "%";
}

var swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
