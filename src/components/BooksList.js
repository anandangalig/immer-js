import React from 'react';
import { connect } from 'react-redux';
import BooksItem from './BooksItem';

const BooksList = props => {
  return (
    <div>
      <h1>BooksList</h1>
      <ul>
        {props.books.map(book => {
          return <BooksItem key={book.id} book={book} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { books: state.books };
};

export default connect(
  mapStateToProps,
  {},
)(BooksList);
