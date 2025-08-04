### Unordered Map in C++ STL
An unordered_map in STL is an associative **container of key-value pairs** where **keys are unique** and **elements are stored in no particular order**.

### Syntax:
```cpp
unordered_map<key_type, value_type> variable_name;
```
### Example:
```cpp
unordered_map<int, int> mp;
unordered_map<string, int> mp_str;
Functions in unordered_map:
```
insert() – to insert a key-value pair.

```cpp
unordered_map<int,int> mp;
mp.insert({1,10});
mp.insert({2,20});
```
begin() – iterator to first element.

```cpp
mp.begin();
```
end() – iterator after last element.

```cpp
mp.end();
```
clear() – deletes all elements.

```cpp
mp.clear();
```
find() – search an element by key.

```cpp
unordered_map<int,int> mp;
mp.insert({1,10});
mp.insert({2,20});
if(mp.find(2)!=mp.end())
  cout << "true" << endl;
```
erase() – delete element by key or iterator.

```cpp
mp.erase(key);
mp.erase(iterator);
```
size() – returns size.

```cpp
mp.size();
```
empty() – check if empty.

```cpp
mp.empty();
```
### Code:
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unordered_map<int, int> mp;
    for (int i = 1; i <= 5; i++) {
        mp.insert({i, i * 10});
    }

    cout << "Elements present in the map: " << endl;
    cout << "Key\tElement" << endl;
    for (auto it = mp.begin(); it != mp.end(); it++) {
        cout << it->first << "\t" << it->second << endl;
    }
    // Output (order may vary):
    // Key  Element
    // 5    50
    // 4    40
    // 3    30
    // 2    20
    // 1    10

    int n = 2;
    if (mp.find(2) != mp.end())
        cout << n << " is present in map" << endl;
    // Output: 2 is present in map

    mp.erase(mp.begin());
    cout << "Elements after deleting the first element: " << endl;
    cout << "Key\tElement" << endl;
    for (auto it = mp.begin(); it != mp.end(); it++) {
        cout << it->first << "\t" << it->second << endl;
    }
    // Output (order may vary):
    // Key  Element
    // 4    40
    // 3    30
    // 2    20
    // 1    10

    cout << "The size of the map is: " << mp.size() << endl;
    // Output: The size of the map is: 4

    if (!mp.empty())
        cout << "The map is not empty" << endl;
    else
        cout << "The map is empty" << endl;
    // Output: The map is not empty

    mp.clear();
    cout << "Size of the set after clearing all the elements: " << mp.size();
    // Output: Size of the set after clearing all the elements: 0
}
```