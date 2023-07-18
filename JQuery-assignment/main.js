$(document).ready(function() {
  $('#2').click(function() {
    var thumbnailSrc = $(this).find('img').attr('src');
    $('#1').attr('src', thumbnailSrc);
    $('#1').fadeIn();
  });

  $('#1').click(function() {
    $(this).fadeOut();
  });
});


/////////////////////////////
$(document).ready(function(){
  $('.next').on('click', function(){
  var currentImg = $('.active');
  var nextImg = currentImg.next();

  if(nextImg.length){
  currentImg.removeClass('active').css('z-index', -10);
  nextImg.addClass('active').css('z-index', 10);
  }
  });
  
  $('.prev').on('click', function(){
  var currentImg = $('.active');
  var prevImg = currentImg.prev();
  
  if(prevImg.length){
  currentImg.removeClass('active').css('z-index',-10)
   prevImg.addClass('active').css('z-index', 10);
  }
  });
   });

   //////////////////////////////

  $('.slider-inner2').click(()=>{
  $(".slider-inner2").toggle(1000)
})

$('img1').click(()=>{
  $("#img1").toggle(1000,()=>{
    $("#img1").toggle(1000,()=>{
      $("#img1").toggle(1000)
      })
    })
  })
  