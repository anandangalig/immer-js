import React from 'react';
import { connect } from 'react-redux';
import { updateBook } from '../actions';
import produce from 'immer';

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

  updateState = event => {
    this.setState(
      // returns produced result: take base -> copy to proxy/draft -> make changes on proxy and return it
      produce(this.state, draftState => {
        draftState[event.target.id] = event.target.value;
      }),
    );
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
        <label htmlFor="updateBookName">Book Name</label>
        <input
          type="text"
          id="updateBookName"
          value={this.state.updateBookName}
          onChange={this.updateState}
        />
        <label htmlFor="updateBookAuthor">Book Author</label>
        <input
          type="text"
          id="updateBookAuthor"
          value={this.state.updateBookAuthor}
          onChange={this.updateState}
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
