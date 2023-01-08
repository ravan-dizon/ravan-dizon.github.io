$(document).on('click','ul li', function(){
         $(this).addClass('active').siblings().removeClass('active')
     })

$('#abt').click(function(){
  $(this).addClass('active').siblings().removeClass('active') 
  $('#abt1').addClass('active').siblings().removeClass('active') 

})
$('#top').click(function(){
  $(this).addClass('active').siblings().removeClass('active') 
  $('#top1').addClass('active').siblings().removeClass('active') 

})
$('#proj').click(function(){
  $(this).addClass('active').siblings().removeClass('active') 
  $('#proj1').addClass('active').siblings().removeClass('active') 

})
$('#cert').click(function(){
  $(this).addClass('active').siblings().removeClass('active') 
  $('#cert1').addClass('active').siblings().removeClass('active') 
})

$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

