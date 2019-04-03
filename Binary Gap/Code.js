// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let MaxCount=0;
    let base = 2;
    let Result = parseInt(N, 10).toString(base);
    let ResultCharArray=Result.split('');
    let CurrentCount=0;
    ResultCharArray.forEach(Char=>{
        if (Char==='0'){
            CurrentCount++;
        }
        else{
            MaxCount=Math.max(MaxCount,CurrentCount);
            CurrentCount=0;
        }
       
    });
        
        
    return MaxCount;
}