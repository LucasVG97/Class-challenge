# This repo contains my resolution of 2 challenges. 

------

### Challenge 1:  Create classes  following the scope below:

![Challenge 1](challenge1.PNG)

Challenge 2:

### The Reading List

*An object-oriented book-list!*

- Create a class `BookList`
- Create another class called `Book`
- **BookLists** should have the following properties:
  - Number of books marked as read
  - Number of books marked not read yet
  - A reference to the next book to read (book object)
  - A reference to the current book being read (book object)
  - A reference to the last book read (book object)
  - An array of all the Books
- Each **Book** should have several properties:
  - Title
  - Genre
  - Author
  - Read (true or false)
  - Read date, can be blank, otherwise needs to be a [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Every **Booklist** should have a few methods:
  - .add(book)
    - should add a **book** to the books list.
  - .finishCurrentBook()
    - should mark the **book** that is currently being read as "read"
    - Give it a read date of new Date(Date.now())
    - Change the last **book** read to be the book that just got finished
    - Change the current **book** to be the next book to be read
    - Change the next **book** to be read property to be the first unread book you find in the list of books
- **Booklists** and **Books** might need more methods than that. Try to think of more that might be useful.

You can find the proposal of the challenge 2 and another challenges following this link:

https://github.com/gSchool/JS-Intro-OOP-Exercises