/**
 * Created by 任 on 2016/11/8.
 */
$(function () {
    $(".link_footer").load("footer.html");
    $("button").click(function (event) {
        $("button").addClass("btn-default").removeClass("btn-primary");
        $(this).removeClass("btn-default");
        $(this).addClass("btn-primary");
     })

})
