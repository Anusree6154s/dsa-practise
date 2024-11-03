// Problem Description
// Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Sample Input 1
// 7
// 2 2 2 3 4 4 9

// Sample Output 1
// 6
// 2 2 3 4 4 9


//ans1
//tc=n, sc=1
function removeDuplicatesFromSortedArrayI(n, arr) {
    let left = 0, right = 1, count = 0
    while (left < arr.length && right < arr.length) {
        if (arr[left] === arr[right] && right === n - 1) {
            arr[left + 1] = arr[right]
            return left + 2
        } else if (arr[left] === arr[right]) {
            count++
        } else {
            if (count >= 1) {
                arr[left + 1] = arr[left]
                arr[left + 2] = arr[right]
                left = left + 2
                count = 0
            } else {
                arr[left + 1] = arr[right]
                left++
            }
        }
        right++
    }

    return left + 1
}

let arr = [2, 2, 2, 3, 4, 4, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11]
let res = removeDuplicatesFromSortedArrayI(16, arr);
console.log(arr.slice(0, res));


//ans2
function removeDuplicatesFromSortedArrayII(n, arr) {
    let j = 0, count = 1
    for (let i = 1; i < n; i++) {
        if (arr[j] === arr[i] && i === n - 1) {
            arr[j + 1] = arr[i]
            return j + 2
        } else if (arr[j] === arr[i]) {
            count++
        } else {
            if (count >= 2) {
                arr[j + 1] = arr[j]
                arr[j+2] = arr[i]
                j += 2
            } else {
                j++
                arr[j] = arr[i]
            }
            count = 1
        }
    }
    console.log(j + 1)
    return j + 1
}

let array = [2, 2, 2, 3, 4, 4, 9]
let result = removeDuplicatesFromSortedArrayII(7, array);
console.log(array.slice(0, result));

//EXPLANATION
//ans1
    // 1pointer for looping entire array elements, 1pointer for looping only changed elements
    // EDGE CASE: 
        //1. when there are 2 elements and the 2nd element is the last element of array (arr[left]===arr[right] but right==arr.length-1) 
        //2. do not forget to replace 2 elements before changing left pointer to left+2:
                //i. arr[left+1]=arr[left] (which results in 1st and 2nd elements being same => arr[left] == arr[left+1])
                //ii. arr[left+2]=arr[right] (which results in 3rd element being the new element)

    //logic
        //first initialise left =0 , right=1 and count=1
        //while left and right< arr.length
            // if arr[j]===arr[i] and i is last element (i==arr.length-1)
                // first assign new element(arr[j+1]=arr[i])
                // then return new arr length (j+3)
            // else if arr[j]===arr[i]
                //count++
            // else if arr[left]!==arr[right]
                //if count>=1 ? (which means there are more 2 elements that are same. first time it was same, count became 1, next time it became 2, and so on)
                    // assign arr[left+1] = arr[left] (same element)
                    //assign arr[left+2]=arr[right] (the new element)
                    //make count=0
                    // move left by 2 places(left=left+2)
                //if count still 0?
                    //assign new element (arr[left+1]=arr[right])
                    //move left by 1 place (left++)
        // return the new arr length (left+2 )    

        
//ans2
    // same as ans 1, but instead of while loop, we use for loop from right(i)=1 to right(i)=arr.length-1