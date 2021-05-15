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
    let timeInterval = 0;
    $(id).empty();
    for (var i = 0; i < str.length; i++) {
        timeInterval = delayAppend(str[i], id, i);
    }

    buttonProp(str, timeInterval);
}

function writeChar(str, id) {
    for (var i = 0; i < str.length; i++) {
        delayAppend(str[i], id, i);
    }
}

function delayAppend(letter, id, i) {
    timeOut = 0 + ((i + 50) * 10);

    setTimeout(function() {
        $(id).append(letter);
    }, timeOut);

    return timeOut;
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

function buttonProp(str, timeInterval) {
    if (str == "what are you watching?") {
        setTimeout(function() {
            $("#optionButtons").css({ 'display': "flex" }).fadeIn(300, "swing");

            $(".button-opt").click(function() {
                console.log(this.value);
                switch(this.value) {
                    case "endingOne":
                        let optionOne = [ 
                            {
                                "name" : "Heroine",
                                "dialogue" : "kpop music video..."
                            },
                            {
                                "name" : "Narrator",
                                "dialogue" : "heroine continue to watch while the protagonist sleep, -To be continued (lol)"
                            }
                        ];
                        optionHandler(optionOne, "HB-Route-Two.jpg");
                        break;
                    case "endingTwo":
                        let optionTwo = [ 
                            {
                                "name" : "Heroine",
                                "dialogue" : "ignored..."
                            },
                            {
                                "name" : "Narrator",
                                "dialogue" : "and heroine watch it herself, -To be continued (lol)"
                            }
                        ];
                        optionHandler(optionTwo, "HB-Route-Three.jpg");
                        break;
                    case "endingThree":
                        let optionThree = [ 
                            {
                                "name" : "Heroine",
                                "dialogue" : "heroine getting closer, pointing her phone"
                            },
                            {
                                "name" : "Narrator",
                                "dialogue" : "and the two watch it together, -To be continued (lol)"
                            }
                        ];
                        optionHandler(optionThree, "HB-Route-One.jpg");
                        break;
                    default :
                        break;   
                }
            });
        }, timeInterval + 500);
    }
}

function optionHandler(addedDialogue, bgImg) {
    let i = 0;
    $("#optionButtons").empty();
    $("#optionButtons").css({ 'display': "none" }).fadeIn(300, "swing");
    $('body').off('click');
    $('body').on('click', function() {       

        lastDialogue(addedDialogue[i].name, "#charName", i, bgImg);
        lastDialogue(addedDialogue[i].dialogue, "#scriptText", i, bgImg);

        if (i < addedDialogue.length - 1) {
            i++;
        }
    });
}


function lastDialogue(str, id, arrLength, bgImg) {
    let timeInterval = 0;
    $(id).empty();
    for (var i = 0; i < str.length; i++) {
        timeInterval = delayAppend(str[i], id, i);
    }

    if (arrLength == 1) {
        setTimeout(function() {
            $('body').fadeOut(300, function () {
                document.body.innerHTML = "";
                $('body').css({ 'background-image': "url('img/" + bgImg + "')" });
    
                $('body').fadeIn(300, "swing");
            });
        }, timeInterval + 1400);
    }
}
