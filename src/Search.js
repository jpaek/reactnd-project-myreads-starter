import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
        query: "",
        searched: []
    }

  search(query) {
    this.setState({query: query})
    if (query.trim() === "") {
        this.setState({searched: []})
    }
    else {
        BooksAPI.search(query)
            .then((books) => {
              if (Array.isArray(books)) {
                this.setState(() => ({
                  searched: books.map((book) => {
                      if (this.props.books.filter((existing) => (book.id === existing.id)).length === 0) {
                          book.shelf = "none";
                      }
                      return book;
                  })
                }))
              }
              else {
                 this.setState({searched: []})
              }
            })
     }

   }

    update(book) {
        this.props.onUpdate(book)
    }
    render(){
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                className='close-search'
                to='/'>
                  Close
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => (this.search(event.target.value))}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                  this.state.searched.map((book) => (
                      <Book key={book.id} book={book} onUpdate={(book) => this.update(book)} />
                  ))
              }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search
