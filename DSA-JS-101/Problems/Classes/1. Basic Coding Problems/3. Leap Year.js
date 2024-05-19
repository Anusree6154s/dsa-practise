// Problem Description
// For an input year N, find whether the year is a leap or not.

// Sample Input 1
// 1600

// Sample Output 1
// true

// Explanation
// Year 1600 is a leap year


function leapYearDSA(N) {
    if(N%400===0){
        return true
    } else if(N%100!==0 && N%100===0){
        return true
    } else{
        return false
    }
}
let res = leapYearDSA(1600);
if (res)
    console.log("true");
else
    console.log("false");

    //TC AND OC = 1