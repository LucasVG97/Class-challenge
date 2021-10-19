class Booklist {
  constructor() {
    this.allBooks = []
    this.readBooks = 0
    this.notReadBooks = 0
    this.currentBook
    this.previousBook
    this.nextBook

  }

  addBook(book) {
    this.allBooks = [...this.allBooks, book]
    if (book.read == true) {
      this.readBooks += 1
    }
    if (book.read == false) {
      this.notReadBooks += 1
    }

    if (book.reading == true) {
      this.currentBook = book
    }


  }

  finishCurrentBook() {
    this.nextBook = this.allBooks.find(book => book.reading == false && book.read == false && book.title != this.currentBook.title)
    this.readBooks += 1
    this.notReadBooks -= 1
    this.currentBook.read = true
    this.currentBook.reading = false
    this.currentBook.date = new Date()
    this.previousBook = this.currentBook
    this.currentBook = this.nextBook
    this.currentBook.reading = true
    this.nextBook = this.allBooks.find(book => book.reading == false && book.read == false && book.title != this.currentBook.title)
  }


}


class Books {
  constructor(title, genre, author, read, reading, date) {
    this.title = title
    this.genre = genre
    this.author = author
    this.read = read
    this.reading = reading
    this.date = date
  }


}

let harryPotter = new Books("Harry Potter", "aventura", "J.K", false, true, 2021)
let aSongOfIceAndFire = new Books("A Song of Ice and Fire", "Fantasy", "George R. R. Martin", false, false, 2021)
let percyJackson = new Books("Percy Jackson", "Fantasy", "Rick Riordan", false, false, 2021)
let booklist = new Booklist()
booklist.addBook(harryPotter)
booklist.addBook(aSongOfIceAndFire)
booklist.addBook(percyJackson)
console.log(booklist)
booklist.finishCurrentBook()
console.log(booklist)
booklist.finishCurrentBook()
console.log(booklist)

