export const deleteBook = id => {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
};

export const createBook = book => {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
};

export const updateBook = updatedBook => {
  return {
    type: 'UPDATE_BOOK',
    payload: updatedBook,
  };
};
