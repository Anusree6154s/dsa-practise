## Topics<a id="top"></a>

1. [Map](#Map)

## 1. Map <a id="Map"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a Map in javascript?</span>

- A **Data structure that can perform fast lookups.**
- It **works based on the concept of key-value pair**
  - Key = Unique Id
  - Value = Details for that key
- Key and Value can be of different data types

#### <span style="color:#ff69b4;">Q2. What are teh properties of a Map in javascript?</span>

- **Keys CANNOT repeat**, has to be unique
- INSERT not possible if the key already exists
- UPDATE Value for a Key
- DELETE based on Key
- POSITION doesn’t matter
- SEARCH based on Keys (generally, this is more optimal) or values
- SORT - may be sorted based on Key

#### <span style="color:#ff69b4;">Q3. How to do CRUD operations on a Map in javascript?</span>
CRUD operations can be performed on map using the following built in functions
    - CREATE/UPDATE: `set(key, value)`: **Adds** a new key-value pair to the map or updates the value of an existing key.
    - READ: `get(key)`: **Returns the value** associated with the specified key, or undefined if the key is not found in the map.
    -`has(key)`: **Returns a boolean indicating whether the specified key is present in the map**.
    - DELETE: `delete(key)`: **Removes** **the key-value pair** associated with the specified key from the map.
    - `clear()`: **Removes all key-value pairs** from the map.

#### <span style="color:#ff69b4;">Q4. When to use map data structure??</span>
- Look for keywords like frequency, occurrence in the question. 
- When we need to keep track of the values associated with keys (e.g. Letter and its frequency)
- For example:
    - Find max frequency character
    - Quick look up for an element

### <u>Problems</u>
1. Maximum Repeating Word
2. Single Number