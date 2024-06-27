// Problem Description
// You have a set of N jobs, each job has a deadline and a profit associated with it. You earn the profit for a job only if you complete it within its deadline. Each job takes 1 unit of time to complete and only one job can be scheduled at a time.

// Your task is to find the maximum profit that you can earn by selecting and scheduling the jobs optimally.

// Input format
// The first line contains an integer N, denoting the number of jobs in the set.

// The second and third lines contain N integers each, denoting the deadline for each job and the profit associated with it, respectively.

// Output format
// Return a single integer - the maximum profit that can be earned.

// Sample Input 1
// 4

// 4 1 1 1

// 20 10 40 30

// Sample Output 1
// 60

// Explanation
// Maximum profit is achieved by performing jobs 1 and 3 (20 + 40 = 60).

// Sample Input 2
// 5

// 2 1 1 2 1

// 100 19 25 27 15

// Sample Output 2
// 127

// Explanation
// Maximum profit is achieved by performing jobs 1 and 4 (100 + 27 = 127).

// Constraints
// 1 <= N <= 100000

// 1 <= deadline[i] <= 100

// 1 <= profit[i] <= 500

function jobSequencing(N, deadlines, profits) {
    // there are two arrays : for deadline and profit
    //approach: we will first sort dealines and profit to arrange by decreasing profit. then for each job(index), we check for the avaioability of its deadline and deadlines before it till 0. do it for every job in the array

    // Pair Jobs with Deadlines and Profits:

    // Represent each job as an object or tuple containing its deadline and profit.
    // Sort Jobs by Profit:

    // Sort the jobs in descending order of their profit. This ensures that we always consider the most profitable jobs first.
    // Use a Schedule Array:

    // Create a schedule array where the index represents time slots. The size of the array should be at least as large as the maximum deadline.
    // Initialize the array with -1 or some indicator to show that the slot is initially empty.
    // Greedy Assignment:

    // Iterate through the sorted jobs, and for each job, try to place it in the latest possible time slot before its deadline.
    // If a slot is already occupied, move to the next available earlier slot.
    // If there are no available slots before the deadline, the job cannot be scheduled.
    // Calculate Total Profit:

    // Sum the profits of all scheduled jobs to get the maximum possible profit.



    // create an arya of deadlines and profits
    let arr = []
    for (let i = 0; i < N; i++) {
        arr.push({ deadline: deadlines[i], profit: profits[i] })
    }

    //sort by profit in descending order (to retirve elements by max profit first)
    arr.sort((a, b) => b.profit - a.profit)

    // get the max deadline 
    let maxDeadline = 0
    arr.forEach(item => maxDeadline = Math.max(maxDeadline, item.deadline))

    // now create an answer array which will track all job deadline uptil maxDeadline
    let deadlineAvailabiltyArray = new Array(maxDeadline + 1).fill(-1)

    let jobProfit = 0
    for (let i = 0; i < N; i++) { //iterate through every job(index) in the array
        for (let j = arr[i].deadline; j > 0; j--) { //for each job iterate through all possible deadlines till zero, or till we find a free slot avaliable
            //free slot found
            if (deadlineAvailabiltyArray[j] === -1) { //if free slot found, un-free that slot and add the profit for completing that job
                deadlineAvailabiltyArray[j] = i
                jobProfit = jobProfit + arr[i].profit
                break
            }
        }
    }
    return jobProfit
}


let N = 4, deadlines = [4, 1, 1, 1], profits = [20, 10, 40, 30]
let result = jobSequencing(N, deadlines, profits)
console.log(result)
