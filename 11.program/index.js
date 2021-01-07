/*$("button").click(function () {

    $("p").hide("slow", function () {
        alert("hi");
    });
});
*/

$("button").click(function () {
    $("p").css("background", "green")
        .slideUp(2000)
        .slideDown(2000)
        .hide(1000);
});