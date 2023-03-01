// let coinFlip;
function main() {
    var n = Number(prompt("How many times do you want to flip the coin?")); 
    for(var i = 0; i < n; i++) {

         let coinFlip = Math.round(Math.random());
        // console.log(coinFlip);
        if(coinFlip == 0) {
            console.log("HEAD");
} else {
  console.log("TAIL");
}

    }}

main()