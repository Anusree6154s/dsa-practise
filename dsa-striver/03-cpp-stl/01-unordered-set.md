### What is an unordered set?

An unordered set in STL is a container that **stores unique elements** in no particular order. Every operation on an unordered set takes **O(1) complexity** in the average case and takes **O(n) in the worst case**.

### Syntax:

```
unordered_set<object_type> variable_name;
```

### Example:

```
unordered_set<int> s;
unordered_set<string> str;
```

### Functions in unordered set:

insert() - to insert an element in the unordered set
```
unordered_set<int> s;
s.insert(1);
s.insert(2);
```
begin() - return an iterator pointing to the first element in the unordered set.
```
s.begin();
```
end() - returns an iterator to the theoretical element after the last element.
```
s.end();
```
count() - it returns 1 if the element is present in the container otherwise 0.
```
unordered_set<int> s;
s.insert(1);
s.insert(2);
s.count(2); //returns true
```
clear() - deletes all the elements in unordered set.
```
s.clear();
```
find() - to search an element in the unordered set.
```
unordered_set<int> s;
s.insert(1);
s.insert(2);
if(s.find(2)!=s.end())
cout<<"true"<<endl;
```
erase() - to delete a single element or elements between a particular range.
```
s.erase();
```
size() - returns the size of the unordered set.
```
s.size();
```
empty() - to check if the unordered set is empty or not.
```
s.empty();
```
### Code
```cpp
#include<bits/stdc++.h>

using namespace std;

int main() {
  unordered_set<int> s;
  for (int i = 1; i <= 10; i++) {
    s.insert(i);
  }

  cout << "Elements present in the unordered set: ";
  for (auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;
  // Possible Output (order may vary as unordered_set is unordered):
  // Elements present in the unordered set: 1 2 3 4 5 6 7 8 9 10 
  // (or any permutation of numbers 1 through 10)

  int n = 2;
  if (s.find(2) != s.end())
    cout << n << " is present in unordered set" << endl;
  // Output: 2 is present in unordered set

  s.erase(s.begin());
  cout << "Elements after deleting the first element: ";
  for (auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
  }
  cout << endl;
  // Possible Output (order may vary; one element is removed):
  // Elements after deleting the first element: 2 3 4 5 6 7 8 9 10 
  // (assuming '1' was erased, but could be any one element)

  cout << "The size of the unordered set is: " << s.size() << endl;
  // Output: The size of the unordered set is: 9

  if (s.empty() == false)
    cout << "The unordered set is not empty " << endl;
  else
    cout << "The unordered set is empty" << endl;
  // Output: The unordered set is not empty 

  s.clear();
  cout << "Size of the unordered set after clearing all the elements: " << s.size();
  // Output: Size of the unordered set after clearing all the elements: 0

  return 0;
}

```

> [!NOTE]
> The main reason you see `#include ` used for vectors but `#include ` used for unordered sets (or other STL containers) is related to **which header files you need to explicitly include in standard C++** versus what `bits/stdc++.h` does:
>
>- `#include ` only includes the I/O stream library (for `cin`, `cout`, etc.). So if your code just needs input/output and you include `` explicitly, that works fine.
>  
>- `#include ` is a **non-standard header** (mostly available in GCC) that includes **all standard C++ headers** at once—iostream, vector, string, unordered_set, map, algorithm, etc. It is convenient in competitive programming so you don't have to include every header separately. But it increases compile time and isn't portable outside GCC.
>
>### Why use only `` sometimes?
>
>If your example only uses `std::vector` and basic I/O, you should explicitly include only those headers you need:
>
>```cpp
>#include 
>#include 
>```
>
>This is considered good practice especially in production code.
>
>### Why `bits/stdc++.h` with unordered_set?
>
>If someone uses `bits/stdc++.h`, they get all the standard containers and algorithms included automatically, so they don't have to add:
>
>```cpp
>#include 
>#include 
>#include 
>```
>
>It’s just a shortcut often used in competitive programming and quick prototyping.
