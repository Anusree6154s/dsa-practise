## Topics

1. [Custom comparator functions](#comparator)
2. [Merge Interval Pattern](#merge)

## 1. Custom comparator functions <a id="comparator"></a>
- Default:
    - sort() tries to convert the array elements to strings first and sorts lexicographically (dictionary order).

- For custom Comparison, sort() function follows basic rules:
    - The comparator functions takes in two arguments to compare (say a and b) 
        - If the function returns -ve number then that means to sort a before b
        - If the function returns a +ve number that means to sort b before a
        - If the function returns 0 then it means to keep the original ordering of a and b

- Custom Comparator examples:
    1. ```javascript
        nums.sort(function (a, b) {
        if (a < b) return -1; // or any negative value
        else if (a > b) return 1; // or any positive value
        else return 0;
        })
        ```
    2. ```javascript
        arr.sort((a, b) => a - b);
        ```
    3. ```javascript
        products.sort((a, b) => {
            if (a.brand === b.brand) {
                return b.price - a.price;
            }
            return a.brand.localeCompare(b.brand);
        });
        ```
        
## 2. Merge Interval Pattern <a id="merge"></a>
- Merge Interval problems **have intervals** (Interval has a **start value and an end value**) **that may overlap and** if they overlap, they **may need to be merged.** 
- There are different possibilities with any two given intervals. They need to be handled to solve the problem:
    - The two intervals may be the same
    - Have the same start time
    - Have the same end time

### <u>Image - Types of intervals</u>
![alt text](image.png)

### <u>Approach - Merging overlapping intervals</u>
1. **Sort** the given intervals by their start value
2. Now, we **take two intervals at a time**. We know that the start time of first interval will be <= start time of second meeting, since the list is sorted.
    1. If there is an overlap i.e. second.start <= first.end, we need to merge first and second into new. (*basically if there is an overlap, find a way to merge*)
        1. We set new.start = first.start. 
        2. We set new.end = the maximum of first.end and second.end
        3. Replace first and second with new, in the list of sorted meetings
    2. Repeat for every pair of meetings in sequence

*There may be different other issues which needs to be practised directly on problems*


### <u>Problems</u>
- Crio
    1. Find out if there are any overlapping intervals among the given intervals
    2. Merge the given meeting ranges or time intervals, if there is any overlap
    3. Find out if there are any conflicting appointments given a list of appointment start and end times
    4. Find the minimum meeting rooms required to conduct all meetings given the meeting timings
    5. Find the max CPU load given a list of processes and their start, end times and cpu loads
    6. Find the common time when all employees are free given their work timings
    Confirm if hotel bookings are possible
    7. Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals
    8. Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals
    9. Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments

