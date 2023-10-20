import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contactBase',
  initialState: {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    newContact(state, action) {
      const { name, number } = action.payload;

      const isDuplicate = state.contacts.some(contact => contact.name === name);

      if (isDuplicate) {
        alert('Сontact with the same name already exists');
      } else {
        state.contacts.push({ id: nanoid(), name, number });
      }
    },
    deleteContact(state, action) {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== contactId);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { newContact, deleteContact } = slice.actions;
