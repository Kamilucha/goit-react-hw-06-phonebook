import { ContactItem } from "components/ContactItem/ContactItem"
import { List } from './Contacts.styled'
import { getContacts, getFilter } from 'redux/selector';
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const Contacts = () => {
    
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

    return (<List>
        {visibleContacts.map(({ id, name, number }) => (
            <ContactItem key={id}
                id={id}
                name={name}
                number={number}
           />
            
        ))}
    </List>)
}
