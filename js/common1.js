
/*SP*/
$(document).ready(function() {
  var act = 0;
  var scroll = 0;
  //header_アコーディオン
  $('.menu-trigger,.back_sp').click(function(){
    if(act == 0){
      $('body').addClass( "pos-fixed" );
          //scroll = $(window).scrollTop();
          act = 1;
        }else{
          act = 0;
          $('body').removeClass( "pos-fixed" );
          $('#navi').removeClass( "pos-fixed-lg" );
        }
        $('.menu-trigger,.back_sp').toggleClass('active');
        $('#acbox').slideToggle();
      });
  $('#acbox ul li:nth-child(3)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
        // $('#navi').removeClass( "pos-fixed-lg" );
        act = 0;
      });
  $('#acbox ul li:nth-child(5)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(6)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(7)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(9)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(11)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(12)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });
  $('#acbox ul li:nth-child(13)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });

  $('#acbox ul li:nth-child(15)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });

  $('#acbox ul li:nth-child(17)').click(function(){
    $('#acbox').slideToggle();
    $('body').removeClass( "pos-fixed" );
    $('.menu-trigger').removeClass( "active" );
    act = 0;
  });

    //   $('#acbox ul li:nth-child(18)').click(function(){
    //   $('#acbox').slideToggle();
    //   $('body').removeClass( "pos-fixed" );
    //   $('.menu-trigger').removeClass( "active" );
    //   act = 0;
    // });

    $('#acbox ul li:nth-child(20)').click(function(){
      $('#acbox').slideToggle();
      $('body').removeClass( "pos-fixed" );
      $('.menu-trigger').removeClass( "active" );
      act = 0;
    });

    $('#acbox ul li:nth-child(22)').click(function(){
      $('#acbox').slideToggle();
      $('body').removeClass( "pos-fixed" );
      $('.menu-trigger').removeClass( "active" );
      act = 0;
    });

    $('#acbox ul li:nth-child(23)').click(function(){
      $('#acbox').slideToggle();
      $('body').removeClass( "pos-fixed" );
      $('.menu-trigger').removeClass( "active" );
      act = 0;
    });

    $('#acbox ul li:nth-child(24)').click(function(){
      $('#acbox').slideToggle();
      $('body').removeClass( "pos-fixed" );
      $('.menu-trigger').removeClass( "active" );
      act = 0;
    });

    //下部固定
    $('#totop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

    // $('#toTop a').click(function(){
    //   $("html, body").animate({ scrollTop: 0 }, 600);
    //   return false;
    // });

    $(window).scroll(function(){
      var st = $(window).scrollTop();
      if(st > 30){
        $('#fixfooter').fadeIn();
       // $('.btn-top').fadeIn();
        $('#totop a').fadeIn();
      //  $('#header').addClass('scr');
      }else{
        $('#fixfooter').fadeOut();
        // $('#fixfooter').fadeOut();
        $('#totop a').fadeOut();
       // $('.btn-top').fadeOut();
        //$('#header').removeClass('scr');
      }
    });
  });
function ancho(id) {
  if($('span.hd_ancho').attr('id') !== id){
    var s = $('#'+id);
    s.removeAttr('id');
    s.prepend('<span id="'+id+'" class="hd_ancho">');            
  }
  console.log($('#'+id).offset().top);
  $('html, body').animate({
    scrollTop: $('#'+id).offset().top
  }, 60);
}

