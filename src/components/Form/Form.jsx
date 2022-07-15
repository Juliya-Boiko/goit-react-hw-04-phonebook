import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import {
  ContactForm,
  ContactLabel,
  ContactField,
  ErrorText,
  PrimaryButton,
  PrimaryButtonIcon,
} from './Form.styled';
import * as yup from 'yup';

const mySchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().length(7).required(),
});

export const MyForm = ({ onSubmitForm }) => {
  const normalizedNumber = str => {
    const normalizedNumber =
      str[0] + str[1] + str[2] + '-' + str[3] + str[4] + '-' + str[5] + str[6];
    return normalizedNumber;
  };

  const normalizedName = str => {
    const normalizedName = str
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
    return normalizedName;
  };

  const hadleSubmit = (values, { resetForm }) => {
    const newName = {
      id: nanoid(),
      name: normalizedName(values.name),
      number: normalizedNumber(values.number),
    };
    onSubmitForm(newName);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={mySchema}
      onSubmit={hadleSubmit}
    >
      {props => (
        <ContactForm>
          <ContactLabel>
            Name:
            <ContactField
              type="text"
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
            />
            <ErrorMessage
              name="name"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactLabel>
          <ContactLabel>
            Number:
            <ContactField
              type="tel"
              name="number"
              onChange={props.handleChange}
              value={props.values.number}
            />
            <ErrorMessage
              name="number"
              render={msg => <ErrorText>{msg}</ErrorText>}
            />
          </ContactLabel>
          <PrimaryButton type="submit">
            <PrimaryButtonIcon />
            Add contact
          </PrimaryButton>
        </ContactForm>
      )}
    </Formik>
  );
};

MyForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
