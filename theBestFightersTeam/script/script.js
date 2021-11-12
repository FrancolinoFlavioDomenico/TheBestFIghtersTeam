/*$(window).on("load", function () {
    $(".preloading").fadeOut("slow",function(){
        $(".preloading").css("display", "none");
    });
});*/

$(document).ready(function () {

    function menuIconAnim(){
        $("#close,#menu").click(function () { 
            $("#mainNav").toggleClass("displayFlex");
            $("header").toggleClass("headerTransparent");
            $("header h1").toggleClass("itemHidden");
            $(".cover #arrowDown").toggleClass("itemHidden");
            $("body").toggleClass("scroolStop");
            
        });

        $("#menu").click(function () {
            $("#menu").animate({
                left:'1em',
                opacity:'0',
            });
            $("#menu").css("display","none");
            $("#close").css("display","flex");
            $("#close").animate({
                left:'0',
                opacity:'1',
            });
            
        });
        $("#close").click(function () {
            $("#close").animate({
                left:'1em',
                opacity:'0',
            });
            $("#close").css("display","none");
            $("#menu").css("display","flex");
            $("#menu").animate({
                left:'0',
                opacity:'1',
            });
            $(".subMenu").css({
                "display": "none",
                "font-size": "1em"
            });  
            
        });
    }
    menuIconAnim();

    $(document).scroll(function () { 
        if ($(document).scrollTop()>50) {
            $("header").addClass("header_black");
        } else {
            $("header").removeClass("header_black");
        }
    });

    $(".mainNav_link").click(function () {
        if($(document).width()<768){
            $("#mainNav").toggleClass("displayFlex");
            $("#menu").toggleClass("displayNone");
            $("#close").toggleClass("displayFlex");
            $("#menu").toggleClass("displayFlex");
            $("#close").toggleClass("displayNone");
            $("header").toggleClass("headerTransparent");
            $("header h1").toggleClass("itemHidden");
        }   
    });
    

    function setHeight() {
        var coverHeight=$(".coverPage").height();
        var footerHeight=$("footer").height();
        var windowHeight=$(window).height();
        var sectionHeight=windowHeight-(coverHeight+footerHeight);
        //console.log(footerHeight);
        $(".storiaKick,.sectionEventi").css('min-height',sectionHeight+"px"); 
        //$(".storiaKick").css("height,100px"); 
        //console.log($(".storiaKick").height());       
    }
    setHeight();

    function getPage(){
        var page=$(location).attr("href");
        if (page=="http://localhost/theBestFightersTeam/historyKickBoxing.php") {
            $(".titlePage").text("Storia della KickBoxing"); 
        } else{
            $(".titlePage").text("Eventi"); 
        }
        /*if($(document).width()>768){
        if(page=="http://localhost/theBestFightersTeam/historyKickBoxing.php" || page=="http://localhost/theBestFightersTeam/eventi.php"){
            $("footer").addClass("footerFixed");
        }
        else{
            $("footer").removeClass("footerFixed");
        }//}*/
    }
    getPage();




    function checkTouch() {
       if("ontouchstart" in document.documentElement){
            $("*").removeClass("hover");
           //$(".mainNav_link,.subMenu_link").removeClass("hover");
           $(".mainNav_link,.subMenu_link").click(function(){
                $(this).css({
                    "border-bottom": "0.1em solid yellow",
                    "cursor": "pointer",
                    "color": "gray"
                })
           });
           $(".aboutItem").click(function () { 
               $(".aboutItem").css({
                   "margin-left": "0.5em",
                   "cursor": "pointer",
                   "color": "gray"
                });
                $(".subMenu").css({
                    "display": "flex",
                    "font-size": "1em"
                });  
           });
       }
    }
    checkTouch();

    /*function functionGallery(img,srcImg){
        $(".galleryZoom img").attr("src", srcImg);
        $(".galleryZoom").fadeIn("slow",function(){
            $(".galleryZoom").css("display", "flex");
        });

        $("#nextPhoto").click(function () { 
            if($(img).is(":last-child")){
                img=$("#galleryContainer img:first-child");
                srcImg=$(img).attr("src");
            }
            else{
                img=$(img).next();
                srcImg=$(img).attr("src");
            }
            $(".galleryZoom img").attr("src",srcImg);
            
        });

        $("#backPhoto").click(function () { 
            if($(img).is(":first-child")){
                img=$("#galleryContainer img:last-child");
                srcImg=$(img).attr("src");
            }
            else{
                img=$(img).prev();
                srcImg=$(img).attr("src");
            }
            $(".galleryZoom img").attr("src",srcImg);
            
        });

        $("#closeGallery").click(function () {
            $(".gallery article img").click(function () { 
                functionGallery(img,srcImg);   
            });
            //$(".gallery article img").click();
            $("body").removeClass("scroolStop"); 
            $(".galleryZoom").fadeOut("slow",function(){
                $(".galleryZoom").css("display", "none");
            });
        });
    }*/

    $(".gallery article img").click(function(){

        //$(".gallery article img").off("click");
        $("body").addClass("scroolStop");
        var img=$(this);
        var srcImg=$(img).attr("src");
        //functionGallery(img,srcImg)
        $(".galleryZoom img").attr("src", srcImg);
        $(".galleryZoom").fadeIn("slow",function(){
            $(".galleryZoom").css("display", "flex");
        });

        $("#nextPhoto").click(function () { 
            if($(img).is(":last-child")){
                img=$("#galleryContainer img:first-child");
                srcImg=$(img).attr("src");
            }
            else{
                img=$(img).next();
                srcImg=$(img).attr("src");
            }
            $(".galleryZoom img").attr("src",srcImg);
            
        });

        $("#backPhoto").click(function () { 
            if($(img).is(":first-child")){
                img=$("#galleryContainer img:last-child");
                srcImg=$(img).attr("src");
            }
            else{
                img=$(img).prev();
                srcImg=$(img).attr("src");
            }
            $(".galleryZoom img").attr("src",srcImg);
            
        });

        $("#closeGallery").click(function () {
            //$(".gallery article img").on();
            $("body").removeClass("scroolStop"); 
            $(".galleryZoom").fadeOut("slow",function(){
                $(".galleryZoom").css("display", "none");
            });
        });
              


    });

});