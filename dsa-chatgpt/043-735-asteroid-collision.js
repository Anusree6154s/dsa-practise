// 735. asteroid-collision

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let ans = []
    for (const ast of asteroids) {
        let exploded = false
        while (ans.length && ans[ans.length - 1] > 0 && ast < 0) 
{
            if (Math.abs(ast) > ans[ans.length - 1]) {
                ans.pop()
            } else if (Math.abs(ast) === ans[ans.length - 1]) {
                ans.pop()
                exploded = true
                break
            } else {
                exploded = true
                break
            }
        }

        if (!exploded) {
            ans.push(ast)
        }
    }

    return ans
};
