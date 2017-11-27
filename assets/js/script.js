$(document).ready(function() {

    // jQuery Function Number 1
    $("#about-pic > img").hover(function() {
        $(this).stop().animate({opacity: "0.5"}, "slow");
    }, function() {
        $(this).stop().animate({opacity: "1"}, "slow");
    });

    $("#profile-pic > img").hover(function() {
        $(this).stop().animate({opacity: "0.5"}, "slow");
    }, function() {
        $(this).stop().animate({opacity: "1"}, "slow");
    });


    // for PROJECT and DESIGN section //

    // jQuery Function Number 2
    $("#lightbox").css("display", "none");
    // jQuery Function Number 3
    $("lightbox").hide();

    // jQuery Function Number 4
    $(".item").click(function() {
        // jQuery Function Number 5
        let name = $(this).children().attr("src"); 
        $("#image").attr("src", name);
        // jQuery Function Number 6
        $("#lightbox").show();
    });

    $(".item-di").click(function() {
        let imageURL = $(this).children().attr("src"); 
        $("#image").attr("src", imageURL);
        $("#lightbox").show();
    });

    $("#close").click(function() {
        $("#lightbox").hide();
    });

    // end PROJECT and DESIGN section //


    $("#up-button").click(function(){
        $("html, body").scrollTop(0);
    });

}) 
