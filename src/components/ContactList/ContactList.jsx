export const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button
            type="button"
            onClick={() => {
              onClick(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
