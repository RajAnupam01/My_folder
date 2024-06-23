function SwapNumbers(a,b){
    console.log (`The value of a : ${a} and b : ${b}`);
     [a,b] = [b,a];
     console.log (`The value of a : ${a} and b : ${b}`);
}
SwapNumbers(5,10);
