import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const addContactsAction = createAction(types.ADD, (contact) => ({
  payload: { ...contact },
}));

export const filterContactAction = createAction(types.FILTER, (name) => ({
  payload: name,
}));

export const deleteContactsAction = createAction(types.DELETE, (id) => ({
  payload: id,
}));
