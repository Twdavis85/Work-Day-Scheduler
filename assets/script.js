$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var event = $(this).siblings(".event").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, event);
    $("i").removeClass("fas fa-plus");
    $("i").addClass("fa fa-spinner fa-spin");
    setTimeout(function () {
    $("i").removeClass("fa fa-spinner fa-spin");
    $("i").addClass("fas fa-plus");
    }, 500);
  });
  $(".row").each(function () {
    var ourTime = parseInt($(this).attr("id").split("-")[1]);
    var currentTime = moment().hours()-8;

    if (ourTime < currentTime) {
      $(this).children(".event").addClass("past");
    } else if (ourTime === currentTime) {
      $(this).children(".event").removeClass("past");
      $(this).children(".event").addClass("present");
    } else {
      $(this).children(".event").removeClass("past");
      $(this).children(".event").removeClass("present");
      $(this).children(".event").addClass("future");
    }
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

  $(".newday").on("click", function () {
    localStorage.clear();
    location.reload();
  });
});
