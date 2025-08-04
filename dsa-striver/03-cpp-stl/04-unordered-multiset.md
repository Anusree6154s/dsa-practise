### Unordered Multiset in C++ STL

An unordered_multiset in STL is an associative container that **stores elements in no particular order** and **allows duplicate elements**, _unlike an unordered_set_.

### Syntax:

```cpp
unordered_multiset<object_type> variable_name;
```
### Example:

```cpp
unordered_multiset<int> s;
unordered_multiset<string> str;
```
### Functions in unordered_multiset:
insert() – to insert an element in the unordered_multiset.

```cpp
unordered_multiset<int> s;
s.insert(1);
s.insert(2);
```
begin() – returns an iterator pointing to the first element.

```cpp
s.begin();
```
end() – returns an iterator to the theoretical element after the last element.

```cpp
s.end();
```
count() – returns the count of a particular element in the unordered_multiset.

```cpp
unordered_multiset<int> s;
s.insert(1);
s.insert(2);
s.count(2); //returns 1
```
clear() – deletes all elements.

```cpp
s.clear();
```
find() – to search an element in the unordered_multiset.

```cpp
unordered_multiset<int> s;
s.insert(1);
s.insert(2);
if(s.find(2) != s.end())
    cout << "true" << endl;
```
erase() – to delete a single element or elements in a range.

```cpp
s.erase(s.begin());
```
size() – returns the size.

```cpp
s.size();
```
empty() – checks if empty.

```cpp
s.empty();
```

### Code:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unordered_multiset<int> s;
    for (int i = 1; i <= 10; i++) {
        s.insert(i);
    }
    s.insert(5); // duplicate element

    cout << "Elements present in the unordered multiset: ";
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    // Output: Elements present in the unordered multiset: 1 2 3 4 5 5 6 7 8 9 10 (order may vary)

    int n = 2;
    if (s.find(2) != s.end())
        cout << n << " is present in unordered multiset" << endl;
    // Output: 2 is present in unordered multiset

    s.erase(s.begin());
    cout << "Elements after deleting the first element: ";
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    // Output: Elements after deleting the first element: 2 3 4 5 5 6 7 8 9 10 (order may vary)

    cout << "The size of the unordered multiset is: " << s.size() << endl;
    // Output: The size of the unordered multiset is: 10

    if (!s.empty())
        cout << "The unordered multiset is not empty" << endl;
    else
        cout << "The unordered multiset is empty" << endl;
    // Output: The unordered multiset is not empty

    s.clear();
    cout << "Size of the unordered multiset after clearing all the elements: " << s.size();
    // Output: Size of the unordered multiset after clearing all the elements: 0
}
```