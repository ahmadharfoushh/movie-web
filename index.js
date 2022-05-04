$(document).ready(function() {

    $("#menu_burger").on("click", function() {

        $(".overlay").css("left", "0px")

    })

    $("#close").on("click", function () { 

        $(".overlay").css("left", "-300px")

     })

     setTimeout(function() {

        $("#preview_video").css("object-fit", "cover")
        $("#preview_video").trigger("play")

    } , 5000)

})