$(()=>{
    //let flag=False;
    $("#start").on('click', gameStarts);
    $("#end").on('click', win);
});

function lose(evt) {
    $(".boundary").css({"background-color": "red"});
    alert("YOU HAVE LOST");
    return false;
}

let win = () => alert("you have win, congratz!!");    

function gameStarts(){
    console.log("game started, have fun!!");
    $(".boundary").on('mouseover', lose);
    $("#maze").on('mouseleave', lose);
}

