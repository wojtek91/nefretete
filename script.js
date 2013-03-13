$(function () {
    $("#body").load("start.html");

    $("button").click(function () {

        $(this).effect("highlight", { color: "white" }, 1000);

        if ($(this).attr("id") == "start") {
            //$("#container").css("background", "url(img/7a.gif) no-repeat bottom right");
            $("#body").fadeOut(400, function () {
                $("#body").load("start.html", function () {
                    $("#body").fadeIn(400);
                });
            });
        } else if ($(this).attr("id") == "kontakt") {
            //$("#container").css("background", "url(img/7a.gif) no-repeat bottom right");
            $("#body").fadeOut(400, function () {
                $("#body").load("kontakt.html", function () {
                    $("#body").fadeIn(400);
                });
            });
        } else if ($(this).attr("id") == "cennik") {
            //$("#container").css("background", "url(img/5a.jpg) no-repeat bottom right");
            $("#body").fadeOut(400, function () {
                $("#body").load("cennik.html", function () {
                    $("#body").fadeIn(400);
                });
            });
        } else if ($(this).attr("id") == "galeria") {
            //$("#container").css("background", "url(img/12a.jpg) no-repeat bottom right");
            $("#body").fadeOut(400, function () {
                $("#body").load("galeria.html", function () {
                    $("#body").fadeIn(400);
                    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
                    Galleria.run('#galleria');
                });
            });
        }
    });
});