// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.forEach(element=>{
       
                A.shift();
                if (!A.includes(element)){
                   return;
                }
                else {
                    A.splice(A.indexOf(element),1);
                }
        
    });
    return A[0];
}