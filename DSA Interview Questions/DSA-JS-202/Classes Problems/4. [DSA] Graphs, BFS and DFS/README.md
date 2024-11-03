## Graphs

A graph is a data structure used in computer science and mathematics to represent a set of objects (called vertices or nodes) and the connections (called edges) between them. Graphs are used to model pairwise relations between objects.

### Key Components of a Graph

1. **Vertices (Nodes):**
   - The individual objects in a graph.
   - Represented as points or circles.

2. **Edges (Links):**
   - The connections between vertices.
   - Represented as lines or arrows (in the case of directed graphs).

### Types of Graphs

1. **Undirected Graph:**
   - An edge between two vertices does not have a direction.
   - Example: A social network where nodes are people and edges represent friendships.

2. **Directed Graph (Digraph):**
   - Each edge has a direction, going from one vertex to another.
   - Example: A Twitter network where nodes are users and edges represent following relationships.

3. **Weighted Graph:**
   - Each edge has a weight (or cost) associated with it.
   - Example: A road network where nodes are intersections and edges represent roads with distances.

4. **Unweighted Graph:**
   - Edges do not have weights.

5. **Cyclic Graph:**
   - Contains at least one cycle (a path where the first and last vertices are the same).

6. **Acyclic Graph:**
   - Does not contain any cycles.

7. **Connected Graph:**
   - There is a path between any two vertices.

8. **Disconnected Graph:**
   - Not all vertices are connected by paths.

9. **Complete Graph:**
   - Every pair of distinct vertices is connected by a unique edge.

10. **Sparse Graph:**
    - Has relatively few edges compared to the number of vertices.

11. **Dense Graph:**
    - Has a large number of edges, close to the maximum number of edges.

### Representations of Graphs

1. **Adjacency Matrix:**
   - A 2D array where the cell at row i and column j indicates the presence (and possibly weight) of an edge between vertex i and vertex j.

2. **Adjacency List:**
   - An array of lists. The index represents a vertex, and the list at that index contains all adjacent vertices.

3. **Edge List:**
   - A list of all edges in the graph, typically represented as pairs (or triples, if weights are included) of vertices.

### Example

Consider a simple undirected graph:

```
   A
  / \
 B---C
```

- **Vertices:** A, B, C
- **Edges:** (A-B), (A-C), (B-C)

### Applications of Graphs

1. **Social Networks:** Representing relationships between individuals.
2. **Computer Networks:** Representing connections between computers/devices.
3. **Web Pages:** Representing links between web pages.
4. **Transportation Networks:** Representing routes and connections between cities.
5. **Biology:** Representing networks of genes or proteins.
6. **Scheduling:** Representing tasks and their dependencies.

### Algorithms on Graphs

1. **Graph Traversal:**
   - Breadth-First Search (BFS)
   - Depth-First Search (DFS)

2. **Shortest Path Algorithms:**
   - Dijkstra’s Algorithm
   - Bellman-Ford Algorithm
   - Floyd-Warshall Algorithm

3. **Minimum Spanning Tree:**
   - Prim’s Algorithm
   - Kruskal’s Algorithm

4. **Cycle Detection:**
   - Using DFS for directed and undirected graphs.

5. **Graph Coloring:**
   - Assigning colors to vertices so that no two adjacent vertices have the same color.

Graphs are a fundamental concept in computer science and are essential for solving many complex problems efficiently.