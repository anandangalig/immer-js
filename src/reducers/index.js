import { combineReducers } from 'redux';

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

const bookReducer = (state = initialBookList, action) => {
  switch (action.type) {
    case 'DELETE_BOOK':
      return state.filter(book => {
        return book.id !== action.payload;
      });
    case 'CREATE_BOOK':
      const newBook = {
        id: Math.floor(Math.random() * 9999999999999),
        ...action.payload,
      };
      return [...state, newBook];
    case 'UPDATE_BOOK':
      const targetIndex = state.findIndex(book => {
        return book.id === action.payload.id;
      });
      state[targetIndex] = { ...action.payload };
      return [...state];
    default:
      return state;
  }
};

export default combineReducers({ books: bookReducer });
