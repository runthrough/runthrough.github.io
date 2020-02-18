---
layout: post
title: Interview Questions
---

### Data Structures
1. [List interface in Java](https://www.geeksforgeeks.org/list-interface-java-examples/)

   - List is a child interface of Collection. It is an ordered collection of objects in which duplicate values can be stored. Since List preserves the insertion order, it allows positional access and insertion of elements. List Interface is implemented by the classes of ArrayList, LinkedList, Vector and Stack.
2. [How is ArrayList implemented in Java?](https://codenuclear.com/how-arraylist-works-internally-java/)

   - In Java, newCapacity = (1.5 * oldCapacity) + 1, for updating the arraylist size when it is full. Default size is 10 when the first element is added.
   - add and delete is O(n) and all other operation is O(1)
   - LinkedList class in Java is doubly linked list.
   - [ArrayList vs LinkedList](https://javarevisited.blogspot.com/2012/02/difference-between-linkedlist-vs.html)
3. [How is hashset implemented in Java?](https://codepumpkin.com/hashset-internal-implementation/)

   - Values are saved as key in internal hashmap property named map.
   - Values corrosponding to the keys in hashmap is private final const object present in the class.
   - Internally it uses put method to return true or false on adding the element. If the set element is already present in the hashmap as key then the hashmap put method will return false and it won't add the element and vice versa.
4. [How is linked list implemented in Java?](https://www.geeksforgeeks.org/implementing-a-linked-list-in-java-using-class/)

   - Class linkedlist has property head which stores the first node.
   - It has internal Node class which has properties data and node saving the reference for next node. Default next node value is null unless there is an next element.
   - Insert method first checks if the this is the head node or traverse through the node using while and find the null refernce in the next value of the node and the new node element to this last element.
   - deletebykey method is implemented by first finding the node with the data and the changing the reference of the prev node to the next node. Since it doesn't require sequential memory there is not need to shift anything.
   - For the deletebyindex check if the position exist and change the reference like the last one.
   - **Remember this is not LinkedList class of Java. LinkedList class of Java implements doubly linked list.**
5. [How is hashmap implemented in Java?](https://www.geeksforgeeks.org/internal-working-of-hashmap-java/)

   - Load Factor = capacity / buckets
   - Meaning per bucket max allowed elements after which the size of the Hashmap will be doubled.
   - Default size of the Hashmap is 16 i.e. 2<sup>4
6. How is stack implemented in Java?

   - 
7. How is treeset implemented in Java?

   - 
8. How is set implemented in Java?
9.  How is queue implemented in Java?
10. How do you implement Treemap in Java?
11. How do you implement LinkedHashSet in Java?
12. What are thread safe data structures in Java?

    - [Guide](https://www.cs.cornell.edu/courses/JavaAndDS/files/javasynclasses.pdf)
    - Vector
13. [ArrayList vs Vector](https://beginnersbook.com/2013/12/difference-between-arraylist-and-vector-in-java/)

    - Resize: 1.5 vs 2.
    - Performace: ArrayList is not synchronized hence allows threads to modify concurrently whereas Vector is synchronized and threads can't modify concurrently.
    - Fail-fast: If the collection (ArrayList, vector etc) gets structurally modified by any means, except the add or remove methods of iterator, after creation of iterator then the iterator will throw ConcurrentModificationException. Structural modification refers to the addition or deletion of elements from the collection. Enumeration provided by vector is not fail fast whereas iterator and listiterator provided by ArrayList if fail fast.
    - CopyOnWriteArrayList is also available as thread-safe ArrayList. Vector doesn't originally belongs to collection framework in Java.
    - Collections class provide a lot of methods to make non synchronized data-structure into synchonized ones.
14. [How to write a thread-safe code in Java?](https://javarevisited.blogspot.com/2012/01/how-to-write-thread-safe-code-in-java.html)

    - Operations which are not atomic can interleave with other thread which makes the program non-thread-safe. For example ++ operator is not atomic it includes read, update and write. When two threads execute the same operation at almost same time it may happen that the first one is about to update and the second on read before that. In that case results would be unexpected.
    - Two ways to solve: user synchronized keyword after the access modifier of the method declaration or to use AtomicInteger() as the integer property.
    - Link in the question has few important points to remember about thread safety.
15. [What are fail fast and fail safe iterators?](https://javarevisited.blogspot.com/2012/02/fail-safe-vs-fail-fast-iterator-in-java.html)

    - Fail fast iterators throw exception when they realise the collection is changed from what they started iterating on.
    - Fail safe iterators give the clone of the collection to iterate on and they don't throw any exception when original collection is changed.
16. 

   - fkjd
#### Array
1. [How do you swap two numbers without temp variable?](https://javarevisited.blogspot.com/2013/02/swap-two-numbers-without-third-temp-variable-java-program-example-tutorial.html)
2. [How do you find the missing number in a given integer array of 1 to 100?](https://javarevisited.blogspot.com/2014/11/how-to-find-missing-number-on-integer-array-java.html)
3. 

#### Linked List
1. [How do you find the middle element of a singly linked list in one pass?](https://javarevisited.blogspot.com/2012/12/how-to-find-middle-element-of-linked-list-one-pass.html)

   - If you want to find the nth element from the last of the linked list in one go i.e. with O(n) complexity or questions of the similar structure, use two pointer to traverse. One pointer is used to track the element with the help of the counter and the another pointer is updated based on the condition on the counter. For example in the case of finding middle element update the second pointer to the next node only when the counter is even and by the time first pointer reaches to the end second pointer will be at the middle element.
2. [How do you find if the linked list is cyclic?](https://javarevisited.blogspot.com/2013/05/find-if-linked-list-contains-loops-cycle-cyclic-circular-check.html)

    - Use two pointer on jumps two times and second jumps one times and in each iteration check if the pointers are the same node. If they are same the linked list is cycle else it is not cyclic.
    - This is called Floyd's cycle finding algorithm and more often referred as tortoise and here algorithm.
3. [How do you reverse a linked list without recursion?](https://www.java67.com/2016/07/how-to-reverse-singly-linked-list-in-java-example.html)

    - Using recursion.
    - The idea is to use to pointers. First one which will keep track of the tail of the reversed linked list in process and another pointer will traverse through the original linked list.
    - **Important**
4. [How are duplicate nodes removed in an unsorted linked list?](https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/)
6. [How do you find the sum of two linked lists using Stack?](https://www.geeksforgeeks.org/sum-of-two-linked-lists/)
7. [Top linked list coding questions](https://javarevisited.blogspot.com/2017/07/top-10-linked-list-coding-questions-and.html)

#### String Manipulations
1. How to get the character count of string?

   - Use hashmap to save the character count and going in one go?
2. 
#### Data Structure Design
1. 
### Algorithms
#### Sorting Algortihms
1. 
#### Dynamic Programming
1. Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
2. Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results. The input string may contain letters other than the parentheses ( and ).
### Design Patterns
#### Creational Design Patterns
1. Singleton Design Pattern

   - Application needs one, and only one, instance of an object. Additionally, lazy initialization and global access are necessary.

#### Behavioral Design Patterns
1. 
#### Structural Design Patterns
1. 
### Databases
### System Design Basics
1. What is consistent Hashing?
### System Design
1. [Vending Machine Design](https://javarevisited.blogspot.com/2016/06/design-vending-machine-in-java.html)
2. Tinder System Design
3. Uber System Design
### Important Links
1. [50 Data Structures Algorithms Interview Questions - Dev Blog](https://dev.to/javinpaul/50-data-structure-and-algorithms-problems-from-coding-interviews-4lh2)
2. [Java Questions - Javarevisited](https://javarevisited.blogspot.com/)
3. [Java Collections Workings - Beginners Book](https://beginnersbook.com/2013/12/java-arraylist/)