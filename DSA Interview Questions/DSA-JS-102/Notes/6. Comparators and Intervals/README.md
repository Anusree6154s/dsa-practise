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
     });
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

### <u>Questions</u>
- chatgpt
    1. **Sort Colors**:
        - Given an array with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. You can use a custom comparator function to achieve this sorting.
    2. **Kth Largest Element in an Array**:
        - Given an unsorted array of integers, find the kth largest element in the array. You can use a custom comparator function to sort the array in such a way that the kth largest element is at the correct position.
    3. **Sort Array By Increasing Frequency**:
        - Given an array of integers, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. You can use a custom comparator function to achieve this sorting.
    4. **Meeting Rooms II**:
        - Given an array of meeting time intervals consisting of start and end times, find the minimum number of conference rooms required. You can use a custom comparator function to sort the intervals based on their start times.
    5. **Merge K Sorted Lists**:
        - Given an array of k sorted linked lists, merge them into a single sorted linked list. You can use a custom comparator function to compare nodes from different lists and merge them accordingly.
    6. **Find K Closest Elements**:
        - Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. You can use a custom comparator function to sort the elements based on their distance from x.
    7. **Minimum Number of Arrows to Burst Balloons**:
        - There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. You can use a custom comparator function to sort the balloons based on their end coordinates and find the minimum number of arrows needed to burst all the balloons.
    8. **Custom Sort String**:
        - Given a string S and a string T, return the string T sorted in custom order defined by string S. You can use a custom comparator function to sort the characters in T based on their order in S.

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
   1. If there is an overlap i.e. second.start <= first.end, we need to merge first and second into new. (_basically if there is an overlap, find a way to merge_)
      1. We set new.start = first.start.
      2. We set new.end = the maximum of first.end and second.end
      3. Replace first and second with new, in the list of sorted meetings
   2. Repeat for every pair of meetings in sequence

_There may be different other issues which needs to be practised directly on problems_

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
- chatgpt
    1. **Merge Intervals**:
        - Given a collection of intervals, merge all overlapping intervals.
    2. **Insert Interval**:
        - Given a set of non-overlapping intervals and a new interval, insert the new interval into the intervals (merge if necessary).
    3. **Non-overlapping Intervals**:
        - Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
    4. **Meeting Rooms II**:
        - Given an array of meeting time intervals consisting of start and end times, find the minimum number of conference rooms required.
    5. **Employee Free Time**:
        - Given a list of schedules representing the working time of employees, find the free time of all employees combined.
    6. **Interval List Intersections**:
        - Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.
    7. **Partition Labels**:
        - A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
    8. **Range Module**:
        - Design a data structure to track the ranges that are active at each point in time and support adding and removing ranges, as well as querying whether a particular point is covered by any active range.
    9. **Summary Ranges**:
        - Given a sorted integer array without duplicates, return the summary of its ranges.
    10. **Interval Intersection**:
        - Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.