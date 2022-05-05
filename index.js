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

    const trending = {
        "async": true,
        "crossDomain": true,
        "url": "https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=28&page=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
            "X-RapidAPI-Key": "583c3ffa31msh5717b01149e07bcp15048djsn77af18ed695e"
        }
    };

    $.ajax(trending).done(function (response) {
        for(var i = 0; i < 10; i++) {
            $(".trending_wrapper").append(`
                <div class="movie_card">
                    <img class="movie_image" src="${ response['results'][i]["poster_path"] }" alt="" width="250">
                </div>
            `)
        }
    });

    const comedy = {
        "async": true,
        "crossDomain": true,
        "url": "https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=878&page=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
            "X-RapidAPI-Key": "583c3ffa31msh5717b01149e07bcp15048djsn77af18ed695e"
        }
    };

    setTimeout(function() {

        $.ajax(comedy).done(function (response) {
            for(var i = 0; i < 10; i++) {
                $(".top_ten_wrapper").append(`
                    <div class="movie_card">
                        <img class="movie_image" src="${ response['results'][i]["poster_path"] }" alt="" width="250">
                    </div>
                `)
            }
        });

    }, 5000)

    const family = {
        "async": true,
        "crossDomain": true,
        "url": "https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=10751&page=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
            "X-RapidAPI-Key": "583c3ffa31msh5717b01149e07bcp15048djsn77af18ed695e"
        }
    };

    setTimeout(function() {

        $.ajax(family).done(function (response) {
            for(var i = 0; i < 10; i++) {
                $(".family_wrapper").append(`
                    <div class="movie_card">
                        <img class="movie_image" src="${ response['results'][i]["poster_path"] }" alt="" width="250">
                    </div>
                `)
            }
        });

    }, 10000)

    const romantic = {
        "async": true,
        "crossDomain": true,
        "url": "https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=10749&page=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
            "X-RapidAPI-Key": "583c3ffa31msh5717b01149e07bcp15048djsn77af18ed695e"
        }
    };

    setTimeout(function() {

        $.ajax(romantic).done(function (response) {
            for(var i = 0; i < 10; i++) {
                $(".romantic_wrapper").append(`
                    <div class="movie_card">
                        <img class="movie_image" src="${ response['results'][i]["poster_path"] }" alt="" width="250">
                    </div>
                `)
            }
        });

    }, 15000)

    const thriller = {
        "async": true,
        "crossDomain": true,
        "url": "https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=37&page=1",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
            "X-RapidAPI-Key": "583c3ffa31msh5717b01149e07bcp15048djsn77af18ed695e"
        }
    };

    setTimeout(function() {

        $.ajax(thriller).done(function (response) {
            for(var i = 0; i < 10; i++) {
                $(".thriller_wrapper").append(`
                    <div class="movie_card">
                        <img class="movie_image" src="${ response['results'][i]["poster_path"] }" alt="" width="250">
                    </div>
                `)
            }
        });

    }, 20000)

})