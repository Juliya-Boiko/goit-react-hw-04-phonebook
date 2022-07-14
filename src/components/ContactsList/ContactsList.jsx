import PropTypes from 'prop-types';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';

export const ContactsList = ({ value, options, onClickDelete }) => {
  const normalizedValue = value.toLowerCase();
  const filteredArray = options.filter((option) => option.name.toLowerCase().includes(normalizedValue));

  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => {
        return <ContactsListItem key={id}>
          {name}: {number}
          <ContactsListButton onClick={() => { onClickDelete(id) }}>
            <IoCloseOutline />Delete
          </ContactsListButton>
        </ContactsListItem>
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
}