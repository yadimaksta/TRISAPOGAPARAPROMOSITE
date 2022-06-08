$(document).ready(function(){
  // ITEMS
  // ПЕРЕКЛЮЧЕНИЕ КОЛЛЕКЦИЙ
  $(".collection-block-sharp").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-soft").removeClass("black-color");
    $(".collection-block-power").removeClass("black-color");
    $(".collection-block-air").removeClass("black-color");
    $(".item-sharp").css("display","flex");
    $(".item-soft").css("display","none");
    $(".item-power").css("display","none");
    $(".item-air").css("display","none");
  });
  $(".collection-block-soft").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-sharp").removeClass("black-color");
    $(".collection-block-power").removeClass("black-color");
    $(".collection-block-air").removeClass("black-color");
    $(".item-sharp").css("display","none");
    $(".item-soft").css("display","flex");
    $(".item-power").css("display","none");
    $(".item-air").css("display","none");
  });
  $(".collection-block-power").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-soft").removeClass("black-color");
    $(".collection-block-sharp").removeClass("black-color");
    $(".collection-block-air").removeClass("black-color");
    $(".item-sharp").css("display","none");
    $(".item-soft").css("display","none");
    $(".item-power").css("display","flex");
    $(".item-air").css("display","none");
  });
  $(".collection-block-air").click(function(){
    $(this).addClass("black-color");
    $(".collection-block-soft").removeClass("black-color");
    $(".collection-block-power").removeClass("black-color");
    $(".collection-block-sharp").removeClass("black-color");
    $(".item-sharp").css("display","none");
    $(".item-soft").css("display","none");
    $(".item-power").css("display","none");
    $(".item-air").css("display","flex");
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
});
