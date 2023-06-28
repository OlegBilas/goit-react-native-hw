import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

// const initialItems = [
//   { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
//   { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
//   { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
//   { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
// ];

const STATUS = {
  FULFILLED: 'fulfilled',
  PENDING: 'pending',
  REJECTED: 'rejected',
};

const actionGenerators = [fetchContacts, addContact, deleteContact];

const getActionGeneratorsWithType = status =>
  actionGenerators.map(generator => generator[status]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.REJECTED)),
        handleRejected
      );
  },
});

function handleFetchContacts(state, action) {
  state.items = action.payload.sort((a, b) => a.name.localeCompare(b.name));
}

function handleAddContact(state, action) {
  state.items = [action.payload, ...state.items].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
function handleDeleteContact(state, action) {
  state.items = state.items
    .filter(item => item.id !== action.payload.id)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function handlePending(state, action) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state, action) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;
