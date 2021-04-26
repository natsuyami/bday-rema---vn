function musicPlay() {
    $("#standByMeAudio")[0].volume = 0;
    $("#standByMeAudio").animate({volume: 0.7}, 3000);
    document.getElementById('standByMeAudio').play();
}

$(document).ready(function() {
    $("#standByMeAudio")[0].volume = 0;
    $("#standByMeAudio").animate({volume: 0.7}, 3000);
        
    setTimeout(function(){
        $("#pageLoader").fadeOut(300, function() { $(this).remove(); });
    }, 4000);

    var ht = $("#textHolder p").height();
    $("#textHolder p").delay(4000).animate({width:'toggle', height: ht}, 3000);
});