import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operactions/contacts';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const formSubmit = async evt => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const number = evt.target.number.value;

    console.log(evt);

    const newContact = {
      name,
      number,
    };

    try {
      await dispatch(addContact(newContact)).unwrap();
      evt.target.reset();
      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={formSubmit}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter name" required />
        <label>Phone</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
