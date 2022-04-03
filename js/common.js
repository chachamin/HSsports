$(window).scroll(function() {
    if($("#go_top").offset().top - $(window).scrollTop() <= 100)
   {
     $("#header_2017").css("top", "0px");
   }else{
     $("#header_2017").css("top", "40px");
   }
 });
 
 
 
 $('.select').on('click','.placeholder',function(){
   var parent = $(this).closest('.select');
   if ( ! parent.hasClass('is-open')){
     parent.addClass('is-open');
     $('.select.is-open').not(parent).removeClass('is-open');
   }else{
     parent.removeClass('is-open');
   }
 }).on('click','ul>li',function(){
   var parent = $(this).closest('.select');
   parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
 });
 
 
 
  // tabbed content
     $(".tab_content").hide();
     $(".tab_content:first").show();
 
   /* if in tab mode */
     $("ul.tabs li").click(function() {
         
       $(".tab_content").hide();
       var activeTab = $(this).attr("rel"); 
       $("#"+activeTab).fadeIn();		
         
       $("ul.tabs li").removeClass("active");
       $(this).addClass("active");
 
       $(".tab_drawer_heading").removeClass("d_active");
       $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
       
     });
     /* if in drawer mode */
     $(".tab_drawer_heading").click(function() {
       
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn();
       
       $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
       
       $("ul.tabs li").removeClass("active");
       $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
     });
 
     $('ul.tabs li').last().addClass("tab_last");
 
 
 
 
 
 
 
 
 