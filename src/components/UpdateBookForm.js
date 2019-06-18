import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions';

const UpdateBookForm = props => {
  const [updateBookName, setupdateBookName] = useState(props.currentBook.name);
  const [updateBookAuthor, setupdateBookAuthor] = useState(props.currentBook.author);

  const handleSubmit = (name, author) => {
    const updateData = {
      id: props.currentBook.id,
      name: updateBookName,
      author: updateBookAuthor,
    };
    props.updateBook(updateData);
    props.setEditing(false);
  };

  return (
    <form
      style={{ marginTop: '10px' }}
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(updateBookName, updateBookAuthor);
      }}
    >
      <label htmlFor="book_name">Book Name</label>
      <input
        type="text"
        id="book_name"
        value={updateBookName}
        onChange={event => {
          setupdateBookName(event.target.value);
        }}
      />
      <label htmlFor="book_author">Book Author</label>
      <input
        type="text"
        id="book_author"
        value={updateBookAuthor}
        onChange={event => {
          setupdateBookAuthor(event.target.value);
        }}
      />
      <button type="submit">Save</button>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const targetIndex = state.books.findIndex(book => {
    return book.id === ownProps.bookID;
  });
  return { currentBook: state.books[targetIndex] };
};

export default connect(
  mapStateToProps,
  { updateBook },
)(UpdateBookForm);
