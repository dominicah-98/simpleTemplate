$(document).ready(function(){

  // Top Button
    $(window).scroll(function(){
      if($(this).scrollTop() > 40) {
        $('#myBtn').fadeIn();
  
    }else{
      $('#myBtn').fadeOut();
    }
    });
  
    $('#myBtn').click(function(){
      $('html,body').animate({scrollTop : 0},100);
    });

    // Navbar Scroll Animation
    $(window).scroll(function() {
        var x = document.getElementById("nav");
        if(this.scrollY <= 10){
            x.className = "";
        }
        else{
            x.className = "scrolled";
        }
    });
    $('#hamburger-menu').click(() => {
      $('#hamburger-menu').toggleClass('responsive');
      $('#myTopnav').toggleClass('responsive');
    });
});