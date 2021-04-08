import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './errors-actions';

const errorContactExists = createReducer(false, {
  [actions.setErrorContactExists]: (_, { payload }) => payload,
});
const errorNumberExists = createReducer(false, {
  [actions.setErrorNumberExists]: (_, { payload }) => payload,
});
const errorContact = createReducer(false, {
  [actions.setErrorContact]: (_, { payload }) => payload,
});
const errorNumber = createReducer(false, {
  [actions.setErrorNumber]: (_, { payload }) => payload,
});
const errors = combineReducers({
  errorContactExists,
  errorNumberExists,
  errorContact,
  errorNumber,
});

export default errors;
