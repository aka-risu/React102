import errorsActions from './errors-actions';

export const clearErrors = () => dispatch => {
  dispatch(errorsActions.setErrorContactExists(false));
  dispatch(errorsActions.setErrorNumberExists(false));
  dispatch(errorsActions.setErrorNumber(false));
  dispatch(errorsActions.setErrorContact(false));
};
