function main() {

  var coinFlip 
  do {
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0) {
      console.log("Heads");
    }

      if(coinFlip == 1) {
      console.log("Tails");
      return
      }
}
while (coinFlip == 0 || coinFlip == 1)

}

main()