
/*SP*/
$(function() {
  var act = 0;
  var scroll = 0;
  //header_アコーディオン
    $('.menu-trigger,.back_sp').click(function(){
      if(act == 0){
        $('html').addClass( "pos-fixed" );
        $('body').addClass( "pos-fixed" );
        $('#navi').addClass( "pos-fixed-lg" );
        //scroll = $(window).scrollTop();
        act = 1;
      }else{
        act = 0;
        $('html').removeClass( "pos-fixed" );
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
      $('#navi').addClass( "pos-fixed-lg" );
      act = 0;
  });
   $('#acbox ul li:nth-child(6)').click(function(){
      $('#acbox').slideToggle();
      $('body').removeClass( "pos-fixed" );
      $('.menu-trigger').removeClass( "active" );
      $('#navi').removeClass( "pos-fixed-lg" );
      act = 0;
  });
    //下部固定
   $('.page-top span').click(function(){
    console.log("cat");
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
   $('.totop a').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(window).scroll(function(){
    var st = $(window).scrollTop();
    if(st > 30){
      $('#fixfooter').fadeIn();
      $('.page-top span').fadeIn();
      $('#header').addClass('scr');
      $('#navi').addClass('scr1');
      console.log('lon');
    }else{
      $('#fixfooter').fadeOut();
      $('.page-top span').fadeOut();
      $('#header').removeClass('scr');
      $('#navi').removeClass('scr1');
    }
  });

  $(".footer_inner .logo").append('<p class="sp-b">有限会社ノッケン<br />〒144-0045　東京都大田区南六郷1-25-20</p>');

  $('a').click(function(event) {

        var id = $(this).attr('href');
        if(id != "#top"){
          console.log("xxx");
          var id = id.substring(id.lastIndexOf('#') + 1);
          ancho(id);
        } 
    });

 var url = document.URL;
    if (url.indexOf('#') > 0) {
        var id = url.substring(url.lastIndexOf('#') + 1);
        if (id !== '') {
            var s = $('#'+id);
            s.removeAttr('id');
            s.prepend('<span id="'+id+'" class="hd_ancho">');
        }
    }

    function ancho(id) {
        if($('span.hd_ancho').attr('id') !== id){
            var s = $('#'+id);
            s.removeAttr('id');
            s.prepend('<span id="'+id+'" class="hd_ancho">');            
        }
        
        $('html, body').animate({
            scrollTop: $('#'+id).offset().top
        }, 1);
    }
    $(".s_map").prepend("<p class='sp-b smap-title'>対応エリア</p>") 
    
});

