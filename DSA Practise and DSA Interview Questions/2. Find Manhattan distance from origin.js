// The Manhattan distance, also known as the taxicab distance or L1 distance, is a measure of the distance between two points in a grid-like path. It is calculated by summing the absolute differences between the x and y coordinates of the two points. 
// manhattan dist=abs(x1-x2)+abs(y1-y2)

https://www.google.com/imgres?q=manhattan%20distance&imgurl=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F343237167%2Ffigure%2Ffig24%2FAS%3A917936684404746%401595864568479%2FEuclidean-and-Manhattan-distance-comparison-3235-Optimizations-The-first-optimization.png&imgrefurl=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FEuclidean-and-Manhattan-distance-comparison-3235-Optimizations-The-first-optimization_fig24_343237167&docid=dg7zT86zjf_HDM&tbnid=RrJDhvS8go5yBM&vet=12ahUKEwi3xpvYncuFAxVZoWMGHQW8CEsQM3oECFkQAA..i&w=850&h=529&hcb=2&ved=2ahUKEwi3xpvYncuFAxVZoWMGHQW8CEsQM3oECFkQAA

// To code the Manhattan distance calculation for a given point (x, y) from the origin, you can follow these steps:

// Calculate the absolute difference between the x-coordinate and 0 (origin): x_diff = abs(x - 0)

// Calculate the absolute difference between the y-coordinate and 0 (origin): y_diff = abs(y - 0)

// Add the absolute differences: distance = x_diff + y_diff

// Return the distance.



function euclideanDistance(x, y) {
    //manhattan dist from origin means x2=y2=0 in abs(x1-x2)+abs(y1-y2)
    return Math.abs(x) + Math.abs(y)
}

let a = euclideanDistance(5, 12)
console.log(a)


// Test cases:
// Case: (5, 12)
// Expected result: abs(5) + abs(12) = 17
// Case: (3, 4)
// Expected result: abs(3) + abs(4) = 7
// Case: (-3, -4)
// Expected result: abs(-3) + abs(-4) = 7
// Case: (0, 0)
// Expected result: abs(0) + abs(0) = 0


