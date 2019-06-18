import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const CreateBookForm = props => {
  const [newBookName, setNewBookName] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const handleSubmit = (name, author) => {
    const newBook = {
      name,
      author,
    };
    props.createBook(newBook);
    setNewBookName('');
    setNewBookAuthor('');
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(newBookName, newBookAuthor);
      }}
    >
      <label htmlFor="book_name">Book Name</label>
      <input
        type="text"
        id="book_name"
        value={newBookName}
        onChange={event => {
          setNewBookName(event.target.value);
        }}
      />
      <label htmlFor="book_author">Book Author</label>
      <input
        type="text"
        id="book_author"
        value={newBookAuthor}
        onChange={event => {
          setNewBookAuthor(event.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default connect(
  null,
  { createBook },
)(CreateBookForm);
