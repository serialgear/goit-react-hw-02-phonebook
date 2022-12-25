import { nanoid } from 'nanoid';
import { ListBtn, ListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ListItem key={nanoid()}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ListBtn
              type="button"
              onClick={() => {
                onClick(contact.id);
              }}
            >
              Delete
            </ListBtn>
          </ListItem>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  state: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
