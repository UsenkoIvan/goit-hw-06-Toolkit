import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContactsAction,
  filterContactAction,
  deleteContactsAction,
} from "./actions";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contactsReducer = createReducer(initialState.contacts, {
  [addContactsAction]: (state, { payload }) => {
    const isNameExist = state.find(({ name }) => name === payload.name);
    if (isNameExist) {
      alert(`This  contact: ${payload.name} is exist`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactsAction]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const contactsFilter = createReducer(initialState.filter, {
  [filterContactAction]: (state, { payload }) => {
    return (state = payload);
  },
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: contactsFilter,
});
