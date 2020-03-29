import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    shelfChanged(book) {
        this.props.onShelfChange(book)
    }
    render(){
        const {books, shelf_name} = this.props;
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{shelf_name}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                      books.map((book) => (
                          <Book key={book.id} book={book} onUpdate={(book) => (this.shelfChanged(book))} />
                      ))
                  }

                </ol>
              </div>
            </div>
        )
    }
}

export default BookShelf
