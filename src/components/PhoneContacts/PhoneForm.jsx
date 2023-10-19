import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './PhoneForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { newContact } from '../../Redux/PhoneSlice'; 
import { nanoid } from '@reduxjs/toolkit';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const PhoneForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(newContact(values));
    actions.resetForm();
  };
  
  return (
    <Formik
      initialValues={{
        id: nanoid(),
        name: '', 
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          Name
          <StyledField name="name" />
          <StyledError name="name" component="div" />
        </label>
        <label>
          Number
          <StyledField name="number" />
          <StyledError name="number" component="div" />
        </label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
