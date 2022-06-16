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

  // ПОСТЕР
  $(".button-poster-active").click(function(){
    $(".poster").css("background-color","black");
    $(".form").addClass("hidden");
    $(".form-done").removeClass("hidden");
    $(".form-done").addClass("visible");
  });
});
