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
    autoplay:false,
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
  $(".owl-carousel.servicios-logisticos").owlCarousel({      
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
  $(".owl-carousel.modal-viaconsumo").owlCarousel({
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
    items:3,    
    autoplay:false,
    autoplayTimeout:4000,    
    responsive:{
        0:{
            items:1,          
        },
        523:{
            items:2,           
        },
        900:{
            items:3,            
        }
    }
  });
});

$( ".ui-icon-buscar" ).click(function() {
  $( ".ui-box-form-buscar" ).fadeToggle( "slow", "linear" );
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