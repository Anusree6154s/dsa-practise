// Problem Description
// Write a program that outputs the string representation of numbers from 1 to N.

// But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Sample Input 1
// 15

// Sample Output 1
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz

// 11

// Fizz

// 13

// 14

// FizzBuzz

// Explanation 1
// For n = 1 , 1 is printed.
// For n = 3 , Fizz is printed.
// For n = 5 , Buzz is printed.
// For n = 15 , FizzBuzz is printed.

function fizzBuzz(n) {
    let result =[]
    for(let i=0; i<=n; i++){
        if(i%3===0 && i%10!==0 && i%5!==0){
            result.push("Fizz")
        } else if(i%10!==0 && i%5==0 &&i%3!==0 ){
            result.push("Buzz")
        } else if(i%3===0 && i%10!==0 && i%5===0){
            result.push("FizzBuzz")
        } else{
            result.push(i)
        }
    }
return result

}
let result = fizzBuzz(15);
for (const ans of result) {
    console.log(ans);
}

//TC = N, OC =N