# Expand The DSA Full Form

**DSA** stands for **Data Structures & Algorithms**. These are two different terms.

## Data Structures: The storage where you can store data.

In computer science, a data structure is like those storage items — it’s a way of organizing and storing data so you can use it effectively.

**Imagine you’re organizing your house.** You have different storage items like:

- A drawer for socks  
- A bookshelf for books  
- A shoe rack for shoes  
- A fridge for food  

Each of these helps you store and access things efficiently.

## Algorithms: The procedures, the operations we need to work on the data.

In programming, an algorithm is a set of instructions to manipulate data and solve a problem.

**Now, imagine you’re baking a cake. You follow a step-by-step recipe:**

1. Get ingredients  
2. Mix them  
3. Bake for 30 minutes  
4. Serve  

That recipe is an **algorithm** — a sequence of steps to solve a problem or accomplish a task. It requires data to process and this data is stored inside one or many data structures.

## Why Algorithm always comes with Data Structures

- **Data Structures without Algorithm** is a sealed treasure that we cannot open.  
- **Algorithm without a data structure** is just a set of instructions, and we don’t need to worry about them.  

You almost never need one without the other.

## Common Data Structures

We are surrounded by data structures.

**List of Common Structures:**

- Array  
- Linked List  
- Stack  
- Queue  
- Hash Table / Hash Map  
- Set  
- Tree  
- Heap  
- Trie  
- Graph  

## Common Operations

| Operation     | Meaning                                                        |
|---------------|----------------------------------------------------------------|
| Insert        | Add new data into the structure or memory                      |
| Delete        | Remove data from a specific location                           |
| Update        | Modify existing data                                           |
| Search/Find   | Locate specific data based on a value or key                   |
| Read/Access   | Retrieve data from a location without modifying it             |
| Traverse      | Visit all elements in a structured way (e.g., one by one)      |
| Sort          | Rearrange data based on a rule (ascending, alphabetical, etc.) |
| Transform     | Convert data into another format/structure                     |
| Merge         | Combine two or more data collections into one                 |
| Split         | Divide a data collection into parts                           |
| Map           | Apply a function to every element                              |
| Filter        | Select elements based on a condition                           |
| Aggregate     | Compute a summary (sum, average, count, etc.)                  |

## How to choose the correct data structure

Why do we need different data structures and algorithms?

**Analogy: Untidy Expensive Room vs Tidy Cheap Room**

Different data structures are good at different operations. Choose based on which operations you want to perform.

Sometimes, we need to use **multiple data structures on the same data** for different operations.

But how do we measure performance? Based on:

- Line of code?  
- Runtime execution time?  
- What metric?  

Consider two programs doing the same thing (sorting an array):

- [Code Sample 1](https://drive.google.com/file/d/1I_IWiLYR4oRJopMP3JrFYK43VzaNDf41/view?usp=sharing)  
- [Code Sample 2](https://drive.google.com/file/d/16spCbj0DRrZxTXTBU_tGVahZfsK4fGWk/view?usp=sharing)  

How do we decide which is better?

## Asymptotic Analysis

**Asymptotic analysis** is used to describe how an algorithm behaves as the input size grows towards infinity.

### Key Concepts:

- **Focus on Growth Rate**  
- **Asymptotic Notations**: Big O, Big Omega, Big Theta  
- **Ignoring Constants**  
- **Scalability**  
- **Performance Comparison**  

### Notations:

- **Big O (O)** - Upper Bound (Worst Case)  
- **Big Omega (Ω)** - Lower Bound (Best Case)  
- **Big Theta (Θ)** - Tight Bound (Exact Case)  

### Growth Functions:

| Notation   | Name               | Example                      | Meaning                         |
|------------|--------------------|------------------------------|----------------------------------|
| O(1)       | Constant Time       | Accessing array by index     | Always takes same time           |
| O(log n)   | Logarithmic Time    | Binary Search                | Very efficient                   |
| O(n)       | Linear Time         | Traversing an array          | Time grows with n                |
| O(n log n) | Linearithmic Time   | Merge Sort, Quick Sort (avg) | Between linear and quadratic     |
| O(n²)      | Quadratic Time      | Bubble Sort                  | Grows fast                       |
| O(n³)      | Cubic Time          | Matrix Multiplication        | Slower than quadratic            |
| O(2ⁿ)      | Exponential Time    | Recursive Fibonacci          | Explodes quickly                 |
| O(n!)      | Factorial Time      | Brute-force TSP              | Extremely slow                   |

- [Big-O Chart Image](https://drive.google.com/file/d/1s_EUqHCDSrVp3zt8Wii1Olm4Hg2Z4YtE/view?usp=sharing)

### Best, Worst, and Average Case

| Term        | Meaning                            | Example (Linear Search)              |
|-------------|------------------------------------|--------------------------------------|
| Best Case   | Fastest (minimum time)             | Element is at the first position     |
| Worst Case  | Slowest (maximum time)             | Element is at the end or not present |
| Average Case| Expected time over all inputs      | Element is somewhere randomly        |

## The Domination Rules

When combining multiple time complexities:

- Take the term with the highest growth rate.  
- Example: n³ + n² + log n = **O(n³)**  

Because Big-O is about **growth trends**, not exact counts.

Adding pennies to millions — the pennies don’t matter.