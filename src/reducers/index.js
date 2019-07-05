import { combineReducers } from 'redux';
import produce from 'immer';

const initialBookList = [
  {
    id: 1,
    name: 'Design of Everyday Things',
    author: 'Don Norman',
  },
  {
    id: 2,
    name: '1776',
    author: 'David McCullough',
  },
  {
    id: 3,
    name: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
  },
];

const bookReducer = produce((draft, action) => {
  switch (action.type) {
    case 'DELETE_BOOK':
      return draft.filter(book => {
        return book.id !== action.payload;
      });
    case 'CREATE_BOOK':
      const newBook = {
        id: Math.floor(Math.random() * 9999999999999),
        ...action.payload,
      };
      draft.push(newBook);
      break;
    case 'UPDATE_BOOK':
      const targetIndex = draft.findIndex(book => {
        return book.id === action.payload.id;
      });
      draft[targetIndex] = { ...action.payload };
      break;
    default:
      return draft;
  }
}, initialBookList);
// NOTE: this pattern of providing a function as first argument returns a curried function that is waiting for the base-state (i.e. initialBookList) see https://github.com/immerjs/immer#currying

export default combineReducers({ books: bookReducer });
