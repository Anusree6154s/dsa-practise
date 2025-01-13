## Question

#### Problem Description

Given coordinates of a point (x,y) in 2D plane, Find in which quadrant does this point lie.

#### Sample Input 1

`-5.5 2`

#### Sample Output 1

`2`

#### Explanation

- The x-coordinate is negative and the y-coordinate is positive which means the point lies in the 2nd quadrant.

## Answer

- Use if/else to check the signs of x and y coordinates
- if x +ve, y +ve, then 1st quadrant
- if x -ve, y +ve, then 2nd quadrant
- if x -ve, y -ve, then 3rd quadrant
- if x +ve, y -ve, then 4th quadrant

- tc=1, sc=1
