$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var event = $(".event").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, event);
    });

    $("#o-7 .event").val(localStorage.getItem("o-7"));
    $("#o-8 .event").val(localStorage.getItem("o-8"));
    $("#o-9 .event").val(localStorage.getItem("o-9"));
    $("#o-10 .event").val(localStorage.getItem("o-10"));
    $("#o-11 .event").val(localStorage.getItem("o-11"));
    $("#o-12 .event").val(localStorage.getItem("o-12"));
    $("#o-13 .event").val(localStorage.getItem("o-13"));
    $("#o-14 .event").val(localStorage.getItem("o-14"));
    $("#o-15 .event").val(localStorage.getItem("o-15"));
    $("#o-16 .event").val(localStorage.getItem("o-16"));
    $("#o-17 .event").val(localStorage.getItem("o-17"));
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

});