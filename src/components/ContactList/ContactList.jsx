import PropTypes from 'prop-types';

import { Li, Ul, Span, DeleteButton } from './ContactListStyled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          <Span>
            {' '}
            {contact.name} {contact.number}
          </Span>
          <DeleteButton
            type="button"
            onClick={() => {
              onClick(contact.id);
            }}
          >
            Delete
          </DeleteButton>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
