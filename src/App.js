import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './Shelves'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
      BooksAPI.getAll()
        .then((books) => {
          console.log(books)
          this.setState(() => ({
            books: books
          }))
        })
  }

  updateBook(book) {
      this.setState((currentState) => ({
        books: currentState.books.filter((current) => (current.id !== book.id)).concat(book)
      }))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <Search books={this.state.books} onUpdate={(book) => this.updateBook(book)}/>
        )} />
        <Route exact path="/" render={() => (
            <Shelves books={this.state.books} onUpdate={(book) => this.updateBook(book)}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
