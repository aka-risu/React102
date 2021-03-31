import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './errors-actions';

const errorsState = {};
const errors = createReducer(errorsState, {
  [actions.setErrorNumberExists]: (_, { payload }) => payload,
});
//   case 'contacts/setErrorNumberExists':
//       return {
//         ...state,
//         errorNumberExists: payload,
//       };
export default combineReducers({
  errors,
});
