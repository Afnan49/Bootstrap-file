$(document).ready(function()
{
    $(".gear-check").click(function()
    {
        $(".color-option").toggle();
    });

    var colorli=$(".color-option ul li");
    colorli
        .eq(0).css("background-color","#33d1cc").end()
        .eq(1).css("background-color","#c033d1").end()
        .eq(2).css("background-color","#6c757d").end()
        .eq(3).css("background-color","#33d179").end()
        .eq(4).css("background-color","#d13a33").end()
        .eq(5).css("background-color","#d19233");

    colorli.click(function()
    {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });

});    