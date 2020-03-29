import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {

  updateBooks(book) {
      this.props.onUpdate(book)
  }



  render() {
    const { books } = this.props
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
              shelf_name="Currently Reading"
              books={books.filter((book) => (book.shelf === "currentlyReading"))}
              onShelfChange={(book) => {
                  this.updateBooks(book)
              }} />
              <BookShelf
              shelf_name="Want to Read"
              books={books.filter((book) => (book.shelf === "wantToRead"))}
              onShelfChange={(book) => {
                  this.updateBooks(book)
              }} />
              <BookShelf
              shelf_name="Read"
              books={books.filter((book) => book.shelf === "read")}
              onShelfChange={(book) => {
                  this.updateBooks(book)
              }} />
            </div>
          </div>
          <div className="open-search">
            <Link className="button" to='/search'>Add a book</Link>
          </div>
        </div>
    )
  }
}

export default BooksApp
