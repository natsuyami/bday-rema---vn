var dialogue = [ 
                    {
                        "name" : "Narrator",
                        "dialogue" : "From a far far.. far.... far away.... There is a traveling man..."
                    },
                    {
                        "name" : "Male",
                        "dialogue" : "No it's just traffic..."
                    },
                    {
                        "name" : "Male",
                        "dialogue" : "It's already one hour yet no progress, as expected of Edsa... haah~"
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "There is a noise... A sound that is like coming from a streaming site playing from besides him."
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "The protagonist got curious and look beside him."
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "Beside him is a girl with a figure that looks like a teen in her high school days. (lol)"
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "With a face of a child that is temptable to pinch. (lolol)"
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "Her round firm buttocks sitting like a child. (lololol)"
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "And a glamourous breast that neither too big nor small, an spectacle to a man's eye. (lololololol)"
                    },
                    {
                        "name" : "Narrator",
                        "dialogue" : "The girl focus her attention on the video playing on her phone."
                    },
                    {
                        "name" : "Male",
                        "dialogue" : "what are you watching?"
                    }
                ];

var background = ["page-2.jpg", "page-3.jpg", "page-4.jpg"];

$(document).ready(function() {
    musicPlay();

    setTimeout(function(){
        $("#pageLoader").fadeOut(300, function() { $(this).remove(); });
        writeChar(dialogue[0].name, "#charName");
        writeChar(dialogue[0].dialogue, "#scriptText");
    }, 1000);

    var i = 1;
    $("body").click(function() {
        console.log("Executing click i=" + i + " dialogue length=" + dialogue.length);
        
        changeBackground(i);
        eraseWriteChar(dialogue[i].name, "#charName");
        eraseWriteChar(dialogue[i].dialogue, "#scriptText");
        if (i < dialogue.length - 1) {
            i++;
        }
    });
});

function musicPlay() {
    $("#standByMeAudio")[0].volume = 0;
    $("#standByMeAudio").animate({volume: 0.7}, 3000);
    document.getElementById('standByMeAudio').play();
}

function eraseWriteChar(str, id) {
    console.log("Executing eraseWriteChar, erasing existing text, param string=" + str + ", id=" + id);

    $(id).empty();
    for (var i = 0; i < str.length; i++) {
        delayAppend(str[i], id, i);
    }
}

function writeChar(str, id) {
    console.log("Executing writeChar with string=" + str + ", id=" + id);

    for (var i = 0; i < str.length; i++) {
        delayAppend(str[i], id, i);
    }
}

function delayAppend(letter, id, i) {
    setTimeout(function() {
        $(id).append(letter);
    }, 0 + ((i + 50) * 10));
}

function changeBackground(index) {
    switch(index) {
        case 2 : 
            $('#pageBg').fadeOut(300, function () {

                $('#pageBg').css({ 'background-image': "url('img/" + background[0] + "')" });

                $('#pageBg').fadeIn(300, "swing");
            });
            break;
        case 5 : 
            $('#pageBg').fadeOut(300, function () {

                $('#pageBg').css({ 'background-image': "url('img/" + background[1] + "')" });

                $('#pageBg').fadeIn(300, "swing");
            });
            break;
        case 9 : 
            $('#pageBg').fadeOut(300, function () {

                $('#pageBg').css({ 'background-image': "url('img/" + background[2] + "')" });

                $('#pageBg').fadeIn(300, "swing");
            });
            break;
        default :
            break;   
    }
}