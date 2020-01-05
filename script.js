$(document).ready(function () {
    boldCount = 0;
    italicCount = 0;
    underlineCount = 0;
    $(".biu-btn").click(function () {
        $(".size-btn").css("background-color", "white");
        $(".size-btn").css("color", "black");
    });
    $("#bold-btn").click(function () {
        if (boldCount == 0) {
            $(".textarea").css("font-weight", "Bold");
            $("#bold-btn").css("background-color", "#FF6A1A");
            $("#bold-btn").css("color", "white");
            boldCount = 1;
        } else {
            $("#bold-btn").css("background-color", "white");
            $("#bold-btn").css("color", "black");
            $(".textarea").css("font-weight", "");
            boldCount = 0;
        }
    });
    $("#italic-btn").click(function () {
        if (italicCount == 0) {
            $(".textarea").css("font-style", "Italic");
            $("#italic-btn").css("background-color", "#FF6A1A");
            $("#italic-btn").css("color", "white");
            italicCount = 1;
        } else {
            $("#italic-btn").css("background-color", "white");
            $("#italic-btn").css("color", "black");
            $(".textarea").css("font-style", "");
            italicCount = 0;
        }
    });
    $("#underline-btn").click(function () {
        if (underlineCount == 0) {
            $(".textarea").css("text-decoration", "underline");
            $("#underline-btn").css("background-color", "#FF6A1A");
            $("#underline-btn").css("color", "white");
            underlineCount = 1;
        } else {
            $("#underline-btn").css("background-color", "white");
            $("#underline-btn").css("color", "black");
            $(".textarea").css("text-decoration", "");
            underlineCount = 0;
        }
    });
    $("#font-inc-btn").click(function () {
        $("#font-inc-btn").css("background-color", "#FF6A1A");
        $("#font-dec-btn").css("background-color", "white");
        $("#font-inc-btn").css("color", "white");
        $("#font-dec-btn").css("color", "black");
        var incSize = $(".textarea").css("font-size");
        var trunkIncSize = incSize.replace("px", "");
        trunkIncSize = parseInt(trunkIncSize) + 1;
        $(".textarea").css("font-size", trunkIncSize + "px");
    });
    $("#font-dec-btn").click(function () {
        $("#font-dec-btn").css("background-color", "#FF6A1A");
        $("#font-inc-btn").css("background-color", "white");
        $("#font-dec-btn").css("color", "white");
        $("#font-inc-btn").css("color", "black");
        var decSize = $(".textarea").css("font-size");
        var trunkDecSize = decSize.replace("px", "");
        trunkDecSize = parseInt(trunkDecSize) - 1;
        $(".textarea").css("font-size", trunkDecSize + "px");
    });
    $(".font-chooser").change(function () {
        $(".textarea").css("font-family", $("option:selected").val())
    });
});