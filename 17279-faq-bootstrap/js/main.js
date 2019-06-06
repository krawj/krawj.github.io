$(function () {
    $(".btn").click(function () {
        $(this).closest(".card-header").next(".collapse").slideToggle(500).parent().siblings().children(".collapse").slideUp(500);
    });
});