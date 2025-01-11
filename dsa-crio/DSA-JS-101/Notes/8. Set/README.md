## Topics<a id="top"></a>

1. [Set](#Set)

## 1. Set <a id="Set"></a>

### <u>Questions</u>

#### <span style="color:#ff69b4;">Q1. What is a Set in javascript?</span>

- A **Data structure that can perform fast lookups.**
- Similar to map
- **Based only the concept of key**. No values here!
  - Key = Unique Id which can be of any data type

#### <span style="color:#ff69b4;">Q2. What are teh properties of a Set in javascript?</span>

- **Keys CANNOT repeat**, has to be unique
- **SIZE of the set is important. It tells us the count of unique keys**
- INSERT not possible if the key already exists
- DELETE a Key
- POSITION doesn’t matter
- SEARCH based on Keys (generally, this is more optimal). Can take linear time

#### <span style="color:#ff69b4;">Q3. How to do CRUD operations on a Set in javascript?</span>

CRUD operations can be performed on map using the following built in functions - CREATE/UPDATE: `add(value)`: **Adds** a new value to the set. - READ: Using **iterative loops** like that of an array -`has(value)`: **Returns a boolean indicating whether the specified key is present in the set**. - DELETE: `delete(value)`: **Removes** **the specified value** from the set. - `clear()`: **Removes all values** from the set.

#### <span style="color:#ff69b4;">Q4. When to use set data structure?</span>

- Understand **if the question revolves around unique elements** (no repeated items)
- When we **need to keep track of presence/absence of elements**

#### <span style="color:#ff69b4;">Q5. When to use set over map?</span>
- **When you need to work only with keys** - use **SET**
- **When you need more information/data** for that key - use **MAP**
- For example:
    - Find if an element exists? 
        - Boolean answer, does not require metadata
    - Find the frequency of an element?
        - An integer value associated with the element (a value associated with a key)


### <u>Problems</u>

1. Find count of unique elements
2. Find Anagrams (permutations)
