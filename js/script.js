$(document).ready(function(){
  // ITEMS
  // ИЗМЕНЕНИЕ ТОВАРОВ
  $(".collection-block-sharp").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-soft, .collection-block-power, .collection-block-air").removeClass("black-color");
    $(".item-sharp").css("display","flex");
    $(".item-soft, .item-power, .item-air").css("display","none");
  });
  $(".collection-block-soft").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-sharp, .collection-block-power, .collection-block-air").removeClass("black-color");
    $(".item-soft").css("display","flex");
    $(".item-sharp, .item-power, .item-air").css("display","none");
  });
  $(".collection-block-power").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-sharp, .collection-block-soft, .collection-block-air").removeClass("black-color");
    $(".item-power").css("display","flex");
    $(".item-sharp, .item-soft, .item-air").css("display","none");
  });
  $(".collection-block-air").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-sharp, .collection-block-power, .collection-block-soft").removeClass("black-color");
    $(".item-air").css("display","flex");
    $(".item-sharp, .item-power, .item-soft").css("display","none");
  });

  // СКРОЛЛ КОЛЛЕКЦИЙ
  $(".collection-block-sharp").hover(function(){
    $(".items-section1").addClass("items-transform-sharp");
    $(".items-section1").removeClass("items-transform-soft");
    $(".items-section1").removeClass("items-transform-power");
    $(".items-section1").removeClass("items-transform-air");
  },function(){});
  $(".collection-block-soft").hover(function(){
    $(".items-section1").addClass("items-transform-soft");
    $(".items-section1").removeClass("items-transform-sharp");
    $(".items-section1").removeClass("items-transform-power");
    $(".items-section1").removeClass("items-transform-air");
  },function(){});
  $(".collection-block-power").hover(function(){
    $(".items-section1").addClass("items-transform-power");
    $(".items-section1").removeClass("items-transform-sharp");
    $(".items-section1").removeClass("items-transform-soft");
    $(".items-section1").removeClass("items-transform-air");
  },function(){});
  $(".collection-block-air").hover(function(){
    $(".items-section1").addClass("items-transform-air");
    $(".items-section1").removeClass("items-transform-sharp");
    $(".items-section1").removeClass("items-transform-soft");
    $(".items-section1").removeClass("items-transform-power");
  },function(){});

  // EVENTS
  // РЕГИСТРАЦИЯ
  $(".button-poster-active-1").click(function(){
    $(".poster-1").css("background-color","black");
    $(".form-1").addClass("hidden");
    $(".form-done-1").removeClass("hidden");
    $(".form-done-1").addClass("visible");
  });
  $(".button-poster-active-2").click(function(){
    $(".poster-2").css("background-color","black");
    $(".form-2").addClass("hidden");
    $(".form-done-2").removeClass("hidden");
    $(".form-done-2").addClass("visible");
  });
  $(".button-poster-active-3").click(function(){
    $(".poster-3").css("background-color","black");
    $(".form-3").addClass("hidden");
    $(".form-done-3").removeClass("hidden");
    $(".form-done-3").addClass("visible");
  });
  $(".button-poster-active-4").click(function(){
    $(".poster-4").css("background-color","black");
    $(".form-4").addClass("hidden");
    $(".form-done-4").removeClass("hidden");
    $(".form-done-4").addClass("visible");
  });
  $(".button-poster-active-5").click(function(){
    $(".poster-5").css("background-color","black");
    $(".form-5").addClass("hidden");
    $(".form-done-5").removeClass("hidden");
    $(".form-done-5").addClass("visible");
  });
  $(".button-poster-active-6").click(function(){
    $(".poster-6").css("background-color","black");
    $(".form-6").addClass("hidden");
    $(".form-done-6").removeClass("hidden");
    $(".form-done-6").addClass("visible");
  });
});
