import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {

  updateBooks(book) {
      this.props.onUpdate(book)
  }



  render() {
    const { books } = this.props
    const shelves = [
        {"name": "currentlyReading", "label": "Currently Reading"},
        {"name": "wantToRead", "label": "Want to Read"},
        {"name": "read", "label": "Read"}
    ]
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {
                  shelves.map((shelf) => (
                      <BookShelf
                      key={shelf.name}
                      shelf_name={shelf.label}
                      books={books.filter((book) => (book.shelf === shelf.name))}
                      onShelfChange={(book) => {
                          this.updateBooks(book)
                      }} />
                  ))
              }
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
