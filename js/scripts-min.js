$(document).ready(function(){
  $(".consulta").click(function(){
    var id_faq;
    id_faq = $(this).attr("id");
    if($(".pregunta" + id_faq).css("height")=='18px')
            $(".pregunta" + id_faq).css({
                                                "height":'auto'
                                            });
    else{
            $(".pregunta" + id_faq).css({
                                                "height":''
                                            });
        }
  });
  if($(".slb-main_nav_ul").hasClass("slb-main_nav_ul_mobile"))
      { 
        $(".slb-social_menu_ul").fadeIn("fast");
      }
  else{
        $(".slb-social_menu_ul").fadeOut("fast");
      }
  // TRIGGER MENU
  $(".slb-main_nav_li_title").click(function(){
    if($(".slb-main_nav_ul").hasClass("slb-main_nav_ul_mobile"))
        { 
          $(".slb-main_nav_ul").removeClass("slb-main_nav_ul_mobile");
          $(".slb-social_menu_ul").fadeOut("fast");
        }
    else{
          $(".slb-main_nav_ul").addClass("slb-main_nav_ul_mobile");
          $(".slb-social_menu_ul").fadeIn("fast");
        }
  });
  //MENU LINKS
  $(".slb-main_nav_li").click(function(){
    $('.slb-main_nav_li').removeClass('slb-main_nav_li_active');
    $(this).addClass('slb-main_nav_li_active');
    $(".slb-main_nav_ul").addClass("slb-main_nav_ul_mobile");
    $(".slb-social_menu_ul").fadeIn("fast");
  });
  // MOVE PAGE
  $("#slb-index").click(function(){
    $(".slb-wrapper_sections").animate
      ({
        "marginLeft":'-50%'
      }, 700);
    });
  $("#slb-ourteam").click(function(){
    $(".slb-wrapper_sections").animate
      ({
        "marginLeft":'-150%'
      }, 700);
    });
  $("#slb-services").click(function(){
    $(".slb-wrapper_sections").animate
      ({
        "marginLeft":'-250%'
      }, 700);
    });
  $("#slb-contact, #slb-contact_2").click(function(){
    $(".slb-wrapper_sections").animate
      ({
        "marginLeft":'-350%'
      }, 700);
    });
  //POP UP
    //OPEN INTERACTIONS
      // REVEAL POP UP LOGIN
      $(".cg-log_on").click(function(){
          $(".cg-bg_popup").fadeIn("slow");
          $(".cg-login").fadeIn("slow");
          $(".cg-login").css({
            "display":'flex'
          });
      });
      //REVEAL POP UP EXCEPT LOGIN
      $(".cg-pop_trigger").click(function(){
          var id_pop;
          id_pop = $(this).attr("id");
          $(".cg-bg_popup").fadeIn("slow");
          $(".cg-popup").fadeOut("fast");
          $(".cg-" + id_pop).fadeIn("slow");
          $(".cg-" + id_pop).css({
            "display":'flex'
          });
      });
    // CLOSE INTERACTIONS
    $(".cg-close_pop").click(function(){
      $(".cg-bg_popup, .cg-popup, .cg-wrapper_popup").css({"display":'none'});
      $("#cg-popup, .cg-flex_pop").css({
          'height':""
        }).delay( 1000 );
      $(".cg-wrapper_form_sections").animate({
          "marginLeft":'0%'
        }, 1000);
      $('.cg-li_section_form').removeClass('cg-li_section_form_active');
      $('.cg-li_section_form:first-of-type').addClass('cg-li_section_form_active');
    });
});
// DISABLE AND ENABLE BODY SCROLL WHEN POPUP IS OPEN
$(document).ready(function(){
  var targetNodes         = $(".cg-popup");
  var MutationObserver    = window.MutationObserver || window.WebKitMutationObserver;
  var myObserver          = new MutationObserver (mutationHandler);
  var obsConfig           = { attributes : true, attributeFilter : ['style'] };
  // ADD A TARGET NODE TO THE OBESERVER. CAN ONLY ADD ONE NODE AT TIME
  targetNodes.each ( function () {
      myObserver.observe (this, obsConfig);
  } );
  function mutationHandler (mutationRecords) {
    var activate_scroll = true;
    $(".cg-popup").each(function( index ) {
      if($(this).css("display") != "none"){
        $('html, body').css({'overflow-y': 'hidden', 'height': '100%'});
        activate_scroll = false;
        return;
      }
    });
    if(activate_scroll){
      $('html, body').css({'overflow-y': 'auto', 'height': 'auto'});
    }
  }
});


