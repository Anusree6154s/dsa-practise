// The Euclidean distance is a measure of the straight-line distance between two points in a two-dimensional space. It is calculated using the formula:

// distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)
// To code the Euclidean distance calculation for a given point (x, y) from the origin, you can follow these steps:

// Square the x-coordinate: x_squared = x * x

// Square the y-coordinate: y_squared = y * y

// Add the squared values: sum_of_squares = x_squared + y_squared

// Take the square root of the sum: distance = sqrt(sum_of_squares)

// Return the distance.



function euclideanDistance(x, y) {
//euclidean dist from origin means x2=y2=0 in sqrt((x2 - x1)^2 + (y2 - y1)^2)
return Math.sqrt(x*x+y*y)
}

let a = euclideanDistance(5, 12)
console.log(a)


// Test cases:
//1.  Case: (3, 4)
// Expected result: sqrt(3^2 + 4^2) = 5
//2.  Case: (-3, -4)
// Expected result: sqrt((-3)^2 + (-4)^2) = 5
//3.  Case: (0, 0)
// Expected result: sqrt(0^2 + 0^2) = 0
//4.  Case: (5, 12)
// Expected result: sqrt(5^2 + 12^2) = 13