import { useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { selectError } from '../../redux/selectors/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <div>
        <div>
          <ContactForm />
          <Filter />
        </div>
        <ContactList error={error} />
      </div>
    </div>
  );
};

export default Contacts;
