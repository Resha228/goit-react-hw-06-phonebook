import React from 'react';
import { PhoneForm } from './PhoneContacts/PhoneForm';
import { FormList } from './PhoneContacts/FormList';
import { Container } from './App.style';


export const App = () => {

  return (
    <Container>
      <PhoneForm />
      <FormList /> 
    </Container>
  );
};

export default App;
