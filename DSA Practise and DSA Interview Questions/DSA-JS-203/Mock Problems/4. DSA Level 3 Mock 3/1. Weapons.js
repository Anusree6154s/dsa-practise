// Problem Description
// As we know, War has started between Russia and Ukraine.

// Putin(President of Russia) has an initial power of P, a rating of 0, and a suitcase of weapons where weapon[i]

// is the value of the ith weapon(weapon[] array and P is given).

// His objective is to maximize his total rating by using each weapon in one of two ways:

// He may utilize the ith weapon if his current power is at least weapon[i], losing weapon[i] power and gaining 1 rating.

// If he has a higher rating than 0, he can sell weapon[i], gaining weapon[i] power and losing 1 rating.

// Each weapon may be used at most once and in any order.

// Return the maximum possible rating that Putin can achieve after using any number of weapons. He need not use all the weapons.

// Input format
// First line contain n - number of weapons and P - Power.

// Then next n contains value of ith weapon.

// Output format
// A single integer denoting maximum rating that Putin can achieve.

// Sample Input 1
// 4 200

// 300 200 500 100

// Sample Output 1
// 2

// Explanation
// Use Weapons in this order :-

// Use weapon with 100 value, Putin power will become 200-100 = 100 and rating becomes 1 (0+1=1).

// Sell weapon with 500 value, Putin power will become 100+500 = 600 and rating becomes 0(as selling will decrease rating by 1).

// Use weapon with 300 value, Putin power will become 600-300 = 300 and rating becomes 1.

// Use weapon with 200 value, Putin power will become 300-200 = 100 and rating becomes 2.

// Constraints
// 0 <= weapons.length <= 100000

// 0 <= weapon[i], P < 10^4

function weapons(n, P, weapons) {
    //  // Initialize dp array
    // const dp = new Array(n + 1).fill().map(() => new Array(P + 1).fill(-Infinity));
    // dp[0][0] = 0; // No weapons and 0 power gives rating 0

    // // Iterate over each weapon
    // for (let i = 1; i <= n; i++) {
    //     const weapon = weapons[i - 1];
    //     for (let j = 0; j <= P; j++) {
    //         // Option 1: Use the weapon if possible
    //         if (j >= weapon) {
    //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weapon] + 1);
    //         }
    //         // Option 2: Sell the weapon if rating is positive
    //         if (dp[i - 1][j] > 0) {
    //             dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] - 1);
    //         }
    //     }
    // }

    // // Find maximum rating achievable with initial power P
    // let maxRating = 0;
    // for (let j = 0; j <= P; j++) {
    //     maxRating = Math.max(maxRating, dp[n][j]);
    // }

    // return maxRating;


    // let arr = []
    // for (let i = 0; i < weight.length; i++) {//O(n)
    //     arr.push([weight[i], value[i]])
    // }

    // arr.sort((a, b) => b[1] - a[1]) //O(nlogn)

    // let totW = 0
    // let totV = 0
    // for (let i = 0; totW < W; i++) {
    //     if (totW + weight[i] <= W) {
    //         totW += weight[i]
    //         totV += value[i]
    //     }
    // }

    // return totV

    // if (n === 0) {
    //     return 0;
    // }

    // // Initialize dp array
    // const maxPower = P * 2;
    // let dp = Array.from({ length: n }, () => Array(maxPower + 1).fill(-Infinity));

    // // Base case: Starting with P power and no weapons used gives rating 0
    // dp[0][P] = 0;

    // // Fill the dp array
    // for (let i = 1; i <= n; i++) {
    //     const currentWeapon = weapons[i - 1];
    //     for (let p = 0; p <= maxPower; p++) {
    //         // Option 1: Use the current weapon
    //         if (p >= currentWeapon) {
    //             dp[i][p] = Math.max(dp[i][p], dp[i - 1][p - currentWeapon] + 1);
    //         }
    //         // Option 2: Sell the current weapon
    //         if (p + currentWeapon <= maxPower && dp[i - 1][p + currentWeapon] !== -Infinity) {
    //             dp[i][p] = Math.max(dp[i][p], dp[i - 1][p + currentWeapon]);
    //         }
    //     }
    // }

    // // Find the maximum rating achievable
    // let maxRating = 0;
    // for (let p = 0; p <= P; p++) {
    //     maxRating = Math.max(maxRating, dp[n][p]);
    // }

    // return maxRating;

//  if (n === 0) {
//         return 0;
//     }

//     let sub = [...weapons.sort((a, b) => a - b)]
//     let add = [...weapons.sort((a, b) => b - a)]
//     let currentPower = P;
//     let currentRating = 0;

//     // Iterate through each weapon
//     for (let i = 0; i < n; i++) {
//         if (currentPower >= sub[0]) {
//             // Option 1: Use the weapon
//             currentPower -= sub.shift();
//             currentRating++;
//         } else if (currentRating > 0) {
//             // Option 2: Sell the weapon
//             currentPower += add.shift();
//             currentRating--;
//         }
//     }

//     return currentRating;




    //   if (n === 0) {
    //     return 0;
    // }

    // // Sort the weapons array in ascending order for using and descending for selling
    // let sub = [...weapons].sort((a, b) => a - b);
    // let add = [...weapons].sort((a, b) => b - a);
    // let currentPower = P;
    // let currentRating = 0;

    // // Iterate through the weapons
    // let i = 0, j = 0;
    // while (i < sub.length || (j < add.length && currentRating > 0)) {
    //     if (i < sub.length && currentPower >= sub[i]) {
    //         // Use the weapon if we have enough power
    //         currentPower -= sub[i];
    //         currentRating++;
    //         i++;
    //     } else if (j < add.length && currentRating > 0) {
    //         // Sell a weapon if we can't use any more weapons and have rating to spare
    //         currentPower += add[j];
    //         currentRating--;
    //         j++;
    //     } else {
    //         // If neither using nor selling is possible, break the loop
    //         break;
    //     }
    // }

    // return currentRating;

    


    
    if (n === 0) {
        return 0;
    }

    // Sort the weapons array in ascending order for using and descending for selling
    let sub = [...weapons].sort((a, b) => a - b);
    let add = [...weapons].sort((a, b) => b - a);
    let currentPower = P;
    let currentRating = 0;

    // Pointers for the sub and add arrays
    let i = 0, j = 0;

    let maxRating = 0
    // Iterate until no more operations can be performed
    while (i < sub.length || (j < add.length && currentRating > 0)) {
        if (i < sub.length && currentPower >= sub[i]) {
            // Use the weapon if we have enough power
            currentPower -= sub[i];
            currentRating++;
            i++;
        } else if (j < add.length && currentRating > 0) {
            // Sell a weapon if we can't use any more weapons and have rating to spare
            currentPower += add[j];
            currentRating--;
            j++;
        } else {
            // If neither using nor selling is possible, break the loop
            break;
        }
        maxRating = Math.max(maxRating, currentRating)
    }

    return maxRating;
}