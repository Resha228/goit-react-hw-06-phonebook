import React from 'react';
import { ContactFilter } from './ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/PhoneSlice';

export const FormList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const contactFilter = useSelector(state => state.filter.filterValue);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <div>
      <ContactFilter/>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  );
};

