## Vector
### Syntax:
`vector<object_type> variable_name;`
### Example:
```
vector<int> v1;
vector<char> v2;
vector<string> v3;
```
### Most used functions in Vector:
begin() - it returns an iterator pointing to the first element of the vector. doesnt return value. just a pointer
```
auto iterator = itr;

itr = v1.begin();
```
end() - it returns an iterator pointing to the element theoretically after the last element of the vector. again pointer, not value
```
auto iterator = itr;

itr = v1.end();
```
push_back() - it accepts a parameter and insert the element passed in the parameter in the vectors, the element is inserted at the end.
```
vector<int> v1;

v1.push_back(1);
v1.push_back(2);
```
insert() - it is used to insert an element at a specified position.
```
auto it= v1.begin();
v1.insert(it,5); //inserting 5 at the beginning
```
erase() - it is used to delete a specific element
```
vector<int> v1;
auto it= v1.begin();
v1.erase(it);// erasing the first element
```
pop_back() - it deletes the last element and returns it to the calling function.
```
v1.pop_back();
```
front() - it returns a reference to the first element of the vector.
```
v1.front();
```
back() - it returns a reference to the last element of the vector.
```
v1.back();
```
clear() - deletes all the elements from the vector.
```
v1.clear();
```
empty() - to check if the vector is empty or not.
```
v1.empty();
```
size() - returns the size of the vector
```
v1.size();
```

### Code
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Initialize a vector of integers
    vector<int> v;

    // 1. push_back() - add elements at the end
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);
    cout << "After push_back(10, 20, 30): ";
    for (int n : v) cout << n << " ";
    cout << endl;
    // Output: After push_back(10, 20, 30): 10 20 30 

    // 2. begin() and end() - iterators to first and one-past-last element
    auto it = v.begin();
    cout << "Element at begin(): " << *it << endl;
    // Output: Element at begin(): 10
    
    it = v.end();
    cout << "Element at end() points to (one past last): ";
    // Can't dereference end(), but we can print last element with prev(it)
    cout << *(prev(it)) << endl;
    // Output: Element at end() points to (one past last): 30

    // 3. insert() - insert element at a given position
    it = v.begin();
    v.insert(it, 5);  // insert 5 at the beginning
    cout << "After insert(5) at beginning: ";
    for (int n : v) cout << n << " ";
    cout << endl;
    // Output: After insert(5) at beginning: 5 10 20 30 

    // 4. erase() - removes element at given position
    it = v.begin();  // point to first element (which is 5)
    v.erase(it);     // erase the first element
    cout << "After erase(first element): ";
    for (int n : v) cout << n << " ";
    cout << endl;
    // Output: After erase(first element): 10 20 30 

    // 5. pop_back() - removes last element
    v.pop_back();
    cout << "After pop_back(): ";
    for (int n : v) cout << n << " ";
    cout << endl;
    // Output: After pop_back(): 10 20 

    // 6. front() - access first element
    cout << "Front element: " << v.front() << endl;
    // Output: Front element: 10

    // 7. back() - access last element
    cout << "Back element: " << v.back() << endl;
    // Output: Back element: 20

    // 8. size() - number of elements
    cout << "Size of vector: " << v.size() << endl;
    // Output: Size of vector: 2

    // 9. empty() - check if empty
    cout << "Is vector empty? " << (v.empty() ? "Yes" : "No") << endl;
    // Output: Is vector empty? No

    // 10. clear() - remove all elements
    v.clear();
    cout << "After clear(), size: " << v.size() << ", is empty? " << (v.empty() ? "Yes" : "No") << endl;
    // Output: After clear(), size: 0, is empty? Yes

    return 0;
}
```