$(function(){

    var id;
    function increaseSize(growth){
        
        $(".circle").css("width", parseInt($(".circle").css("width"))+growth+"px");
        $(".circle").css("height", parseInt($(".circle").css("height"))+growth+"px");
    }

    function drawCricle(x, y, clr){
        $(".circles").append($("<div>", {
            "class": "circle",
            "css": {
                "width": $("#width")[0].value,
                "height": $("#width")[0].value,
                "bottom": y+400+"px",
                "left": x+"px",  
                "right": "0px",             
                "border-radius": "50%",
                "background-color": "#"+clr,
                "position": "absolute"
            },
            "click": function(e){$(e.target).remove()}            
        }
        ));
    }
    
    $("#start").click( ()=>{
        //draw multiple circles
        for (var i = 0; i< $("#number")[0].value; i++){
            let y = Math.random()*400;
            let x = Math.random()*1200;
            let color = (Math.floor(Math.random()*999).toString(16));
            drawCricle(x, y, color);           
        }

        //start extending
        let extenderInterval = setInterval(increaseSize, 
                                    parseInt($("#interval")[0].value), 
                                    parseInt($("#growth")[0].value));
    });

});