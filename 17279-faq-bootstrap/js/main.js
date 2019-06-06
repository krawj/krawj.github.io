$(function () {
    $(".btn").click(function () {
        $(this).closest(".card-header").next().slideToggle(500).parent().siblings().children('.collapse').slideUp(500);
    });
});