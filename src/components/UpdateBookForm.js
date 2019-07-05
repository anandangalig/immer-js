import React from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions';

class UpdateBookForm extends React.Component {
  state = {
    updateBookName: this.props.currentBook.name,
    updateBookAuthor: this.props.currentBook.author,
  };

  handleSubmit = () => {
    const updateData = {
      id: this.props.currentBook.id,
      name: this.state.updateBookName,
      author: this.state.updateBookAuthor,
    };
    this.props.updateBook(updateData);
    this.props.setEditing(false);
  };

  render() {
    return (
      <form
        style={{ marginTop: '10px' }}
        onSubmit={event => {
          event.preventDefault();
          this.handleSubmit();
        }}
      >
        <label htmlFor="book_name">Book Name</label>
        <input
          type="text"
          id="book_name"
          value={this.state.updateBookName}
          onChange={event => {
            this.setState({ updateBookName: event.target.value });
          }}
        />
        <label htmlFor="book_author">Book Author</label>
        <input
          type="text"
          id="book_author"
          value={this.state.updateBookAuthor}
          onChange={event => {
            this.setState({ updateBookAuthor: event.target.value });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

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
