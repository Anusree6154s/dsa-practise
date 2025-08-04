### Multiset in C++ STL
A multiset in STL is an associative container *similar to a set* but **allows duplicate elements**. It stores elements **in a specific sorted order (usually ascending)**.

### Syntax:
```cpp
multiset<object_type> variable_name;
```
### Example:
```cpp
multiset<int> s;
multiset<string> str;
Functions in multiset:
```
insert() – to insert an element.

```cpp
multiset<int> s;
s.insert(1);
s.insert(2);
```
begin() – returns iterator to the first element.

```cpp
s.begin();
```
end() – iterator after the last element.

```cpp
s.end();
```
count() – count of particular element.

```cpp
multiset<int> s;
s.insert(1);
s.insert(2);
s.count(2); //returns 1
```
clear() – deletes all elements.

```cpp
s.clear();
```
find() – search an element.

```cpp
multiset<int> s;
s.insert(1);
s.insert(2);
if(s.find(2)!=s.end())
  cout << "true" << endl;
```
erase() – delete a single element or range.

```cpp
s.erase(iterator);
```
size() – returns size.

```cpp
s.size();
```
empty() – check if empty.

```cpp
s.empty();
```
### Code:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    multiset<int> s;
    for (int i = 1; i <= 10; i++) {
        s.insert(i);
    }
    s.insert(5); // duplicate element

    cout << "Elements present in the multiset: ";
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    // Output: Elements present in the multiset: 1 2 3 4 5 5 6 7 8 9 10

    int n = 2;
    if (s.find(2) != s.end())
        cout << n << " is present in multiset" << endl;
    // Output: 2 is present in multiset

    s.erase(s.begin());
    cout << "Elements after deleting the first element: ";
    for (auto it = s.begin(); it != s.end(); it++) {
        cout << *it << " ";
    }
    cout << endl;
    // Output: Elements after deleting the first element: 2 3 4 5 5 6 7 8 9 10

    cout << "The size of the multiset is: " << s.size() << endl;
    // Output: The size of the multiset is: 10

    if (!s.empty())
        cout << "The multiset is not empty" << endl;
    else
        cout << "The multiset is empty" << endl;
    // Output: The multiset is not empty

    s.clear();
    cout << "Size of the multiset after clearing all the elements: " << s.size();
    // Output: Size of the multiset after clearing all the elements: 0
}
```