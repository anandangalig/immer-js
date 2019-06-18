import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../actions';
import UpdateBookForm from './UpdateBookForm';

const BooksItem = props => {
  const { id, name, author } = props.book;
  const [editing, setEditing] = useState(false);

  return (
    <li style={{ marginBottom: '25px' }}>
      <strong>{name}</strong> by {author}
      <button
        onClick={() => {
          props.deleteBook(id);
        }}
      >
        delete
      </button>
      {editing ? (
        <button
          onClick={() => {
            setEditing(false);
          }}
        >
          cancel
        </button>
      ) : (
        <button
          onClick={() => {
            setEditing(true);
          }}
        >
          update
        </button>
      )}
      {editing && <UpdateBookForm bookID={id} setEditing={setEditing} />}
    </li>
  );
};

export default connect(
  null,
  { deleteBook },
)(BooksItem);
