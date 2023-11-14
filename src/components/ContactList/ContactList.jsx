import { Contact } from '../Contact/Contact';
export const ContactList = props => {
  return (
    <div>
      <Contact props={props.contacts} onDelete={props.onDelete} />
    </div>
  );
};
