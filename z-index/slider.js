$(document).ready(function () {
  let target;
  $(".content-side").hover(
    function () {
      $(this).addClass("activate");
      $(this).siblings().addClass("deactivate");
      target = $(this).attr("data-side");
      $(this).parent().siblings(`.${target}`).css("z-index", "1");
      target === "medical-side"
        ? $(this)
            .parent()
            .siblings(".medical-side")
            .css("transform", "translate(-42%)")
        : $(this)
            .parent()
            .siblings(".packaging-side")
            .css("transform", "translate(3%)");
      $(this).find("a").addClass("btn btn-primary");
    },
    function () {
      $(this).removeClass("activate");
      $(this).siblings().removeClass("deactivate");
      $(this).find("a").removeClass("btn btn-primary");
      $(this)
        .parent()
        .siblings(".medical-side")
        .css("transform", "translate(-58%)");
      $(this)
        .parent()
        .siblings(".packaging-side")
        .css("transform", "translate(21%)");
      $(this).parent().siblings(`.${target}`).css("z-index", "auto");
    }
  );
});
