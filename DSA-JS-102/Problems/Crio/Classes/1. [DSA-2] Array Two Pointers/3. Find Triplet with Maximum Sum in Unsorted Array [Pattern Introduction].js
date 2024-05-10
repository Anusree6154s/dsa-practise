//HARD
//Three sum with sorted terms as answer

// Problem Description
// Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

// Sample Input 1
// 7
// 3 7 4 2 5 7 5

// Sample Output 1
// 16

function maxSumTriplet(n, nums) {
    let left=0, right=2
    let mid = 1
    let result = 0

    while (mid < n) {
        for(let i=0; i<mid; i++){
            if(nums[i]>nums[left] && nums[i]<nums[mid]){
                left =i
            }
        }
        for(let i=mid+1; i<n; i++){
            if(nums[i]>nums[right] && nums[i]>nums[mid]){
                right =i
            }
        }

        sum = nums[left] + nums[right] + nums[mid]
        if (sum > result && nums[left] < nums[mid] && nums[mid] < nums[right]) {
            result = sum
        }
        
        mid++
    }

    return result
}

let ans = maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5]);
console.log(ans);

//EXPLANATION
//logic is to 
    //1. loop through all mid values
    //2. find the max elemnt among the left half
    //3. find the max element among the right half
    //4. find their sum and stroe it as the ans, IF it is larger than the prev sum 
//So logic is to have 3 loops, and then the comparison to store the answer

//loop1
    //loop2
    //loop3
    //comparison to store ans

//initialise left =0, mid=1, right=2
//initialise sum=0
// loop1 : from 1 to nums.length for mid value
    //loop2: from 1 to mid-1 for finding max among left values
    //loop3: from mid+1 to nums.length for finding max among right values
    // if condn to check if left+mid+right > sum
        // if yes ans= left+mid+right
//return ans

