import { createSelector } from 'reselect';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.contacts;

export const filteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase()),
    ),
);
export const getLoading = state => state.contacts.loading;
