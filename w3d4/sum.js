const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var total = 0;
function getNumber(num){
  if (num == "stop") {
    console.log(total);
    readline.close();
  } 
  else {    
      total += Number(num);    
  }
};

function callBack(num) {    
  getNumber(num); 
  readline.question("inser num, 'stop' otherwise: ", (num) => {callBack(num)});  
}

readline.question("inser num, 'stop' otherwise: ", (num) => {callBack(num)});