$(()=>{
    //let flag=False;
    $("#start").on('click', gameStarts);
    $("#end").on('mouseenter', win);
});

var ended = false;
function lose(evt) {
    if (!ended) {
        $(".boundary").css({"background-color": "red"});
        $("#status").text("YOU HAVE LOST");
        ended = true;
    }
}

let win = () => {
    if (!ended) {
        $("#status").text("You win, congratz");
        ended = true;
    }     
}   

function gameStarts(){
    $("#status").text("Click the \"S\" to begin.");
    $(".boundary").css({"background-color": "#eeeeee"});
    $(".boundary").on('mouseover', lose);
    $("#maze").on('mouseleave', lose);
    ended = false;
}

