$(function (){
    isSideBarHidden = true;
   $('.menu_icon').click(function (){
       if(isSideBarHidden){
       isSideBarHidden = false;
     $('.menu_icon img').attr('src','img/close.png');  
      $('header .search_box input').width('0px');
      $('header .search_box').show();
      $('header .search_box input').animate({
            width: '260px'
        }, 500);
      $('.side_bar ').width('0px');
      $('.side_bar').show();
      $('.side_bar').animate({
            width: '290px'
        }, 500);  
    }
        else{
            isSideBarHidden = true;
            $('.menu_icon img').attr('src','img/side_bar_icon.png');  
            $('header .search_box input').animate({
                width: '0px'
            }, 500);
            $('header .search_box input').animate({
                width: '0px'
            }, 500, function (){
                $('header .search_box').hide();
            });
            $('.side_bar').animate({
                width: '0px'
            }, 500, function (){
                $('.side_bar').hide();
            });
        }
   });
   
   $('.side_bar .item').click(function (){
      $('.sub_side_bar:visible').hide();
      $(this).find('.sub_side_bar').show();
   });
   
});