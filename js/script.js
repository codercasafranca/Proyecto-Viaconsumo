// seccion servicios
function openServicios(evt, serviciosName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-servicios");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-servicio");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(serviciosName).style.display = "block";
    evt.currentTarget.className += " active";
}

// seccion cobertura
function openCobertura(evt, coberturaName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-cobertura");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-cobertura");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(coberturaName).style.display = "block";
    evt.currentTarget.className += " active";
}

// seccion estructura
function openEstructura(evt, estructuraName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-infraestructura");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-ubicacion");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(estructuraName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function(){
  $(".owl-carousel.servicio-modal").owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1,          
        },
        600:{
            items:1,           
        },
        1000:{
            items:1,           
        }
    }
  });
});

$(document).ready(function(){
  $(".owl-carousel.banner").owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:false,
    interval:4000,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1,          
        },
        600:{
            items:1,           
        },
        1000:{
            items:1,           
        }
    }
  }).on('slide.bs.carousel', function () {
  document.getElementById('player').pause();
  });
});

$(document).ready(function(){
  $(".owl-carousel.marcas").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1,          
        },
        600:{
            items:1,           
        },
        1000:{
            items:1,           
        }
    }
  });
});

$(document).ready(function(){
  $(".owl-carousel.servicios-comerciales").owlCarousel({      
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});



$(document).ready(function(){
  $(".owl-carousel.infraestructura").owlCarousel({
    margin:10,
    items:1,
    autoplay:false,
    pager:'true',
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayTimeout:2000,    
    responsive:{
        0:{
            items:1,          
        },
        600:{
            items:1,           
        },
        1000:{
            items:1,
            loop:false
        }
    }
  });
});

$(document).ready(function(){
  $(".owl-carousel.noticias").owlCarousel({
    margin:10,
    pager:'true',
    items:1,    
    autoplay:false,
    autoplayTimeout:4000,    
    responsive:{
        0:{
            items:1,          
        },
        523:{
            items:1,           
        },
        900:{
            items:1,            
        }
    }
  });
});

$( ".ui-icon-buscar" ).click(function() {
  $( ".ui-box-form-buscar" ).fadeToggle( "slow", "linear" );
});

/*******************
 *     navScroll   *
 *******************/
$('.ui-nav ul li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top+1
        }, 1000);
});

/***************************
 *       fixed menu        *
 ***************************/
$(window).scroll(function(){
  var sticky = $('.ui-box-logotipo-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 30) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(window).scroll(function(){
  var sticky = $('.ui-box-logotipo-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 600) sticky.addClass('fondo-header-01');
  else sticky.removeClass('fondo-header-01');
});

$(window).scroll(function(){
  var sticky = $('.ui-box-logotipo-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 600) sticky.addClass('fondo-header-01');
  else sticky.removeClass('fondo-header-01');
});

/*******************************
 *           navEfects         *
 *******************************/
$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#b").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("dos"); 
            }else{
          $('.ui-nav').removeClass("dos");
        }
    });
});

$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#c").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("tres"); 
            }else{
          $('.ui-nav').removeClass("tres");
        }
    });
});

$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#d").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("cuatro"); 
            }else{
          $('.ui-nav').removeClass("cuatro");
        }
    });
});

$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#e").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("cinco"); 
            }else{
          $('.ui-nav').removeClass("cinco");
        }
    });
});

$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#f").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("seis"); 
            }else{
          $('.ui-nav').removeClass("seis");
        }
    });
});

$(document).ready(function() { 
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#g").offset();
        contenido2 = contenido2.top-40;
 
        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("siete"); 
            }else{
          $('.ui-nav').removeClass("siete");
        }
    });
});

function openContacto(evt, contactoName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-contacto");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contactoName).style.display = "block";
    evt.currentTarget.className += " active";
}

 jQuery(function(){   
     jQuery("a.demo").YouTubePopUp( { autoplay: 1 } ); // Disable autoplay
 });

$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 150,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

 /******
btn top
*******/
$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
          $('.ui-icon-btn-top').fadeIn();
      } else {
          $('.ui-icon-btn-top').fadeOut();
      }
  });
});

$(document).ready(function(){
  $('.ui-icon-btn-top').click(function(){
      $('body,html').animate({scrollTop : 0}, 500);
      return false;
  });
});

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider.banner').flexslider({
    animation: "slide"
  });
});

$(window).load(function() {
$('#preview').preview(); 
});

/******************
   corporativo
*******************/
function openCorporativo(evt, corporativoName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-corporativo");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-corporativo");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-corporativo", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(corporativoName).style.display = "block";
    evt.currentTarget.className += " active-corporativo";
}

// corporativo
$(document).ready(function(){
  $(".owl-carousel.corporativo").owlCarousel({      
    margin:10,
    nav:false,
    autoplay:true,    
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

// slideBoxServicios
$(document).ready(function(){
  $(".owl-carousel.slide-box").owlCarousel({     
    nav:true,
    autoplay:false,    
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

// servicio items
$(document).ready(function(){
  $(".owl-carousel.servicio").owlCarousel({     
    nav:false,
    autoplay:true,
    loop:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],      
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

/******************
   adicionalTabs
*******************/
function openAdicional(evt, adicionalName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent-adicional");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks-adicional");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-adicional", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(adicionalName).style.display = "block";
    evt.currentTarget.className += " active-adicional";
}

// ocultarAdicional
$(document).ready(function(){   
    $(".ui-btn-ocultar-adicional.uno > span").on( "click", function() {        
        $('.tabcontent-adicional.uno').hide(); //muestro mediante clase        
    });
});

$(document).ready(function(){   
    $(".ui-btn-ocultar-adicional.dos > span").on( "click", function() {        
        $('.tabcontent-adicional.dos').hide(); //muestro mediante clase      
    });
});

$(document).ready(function(){   
    $(".ui-btn-ocultar-adicional.tres > span").on( "click", function() {         
        $('.tabcontent-adicional.tres').hide(); //muestro mediante clase
    });
});

$(document).ready(function(){
    $(".tablinks-corporativo").click(function(){
        $(".ui-contenedor-info-tab").animate({left: '0%'});
    });
});

$(document).ready(function(){
    $(".ui-box-btn-volver > figure img").click(function(){
        $(".ui-contenedor-info-tab").animate({left: '100%'});
    });
});

