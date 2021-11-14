import './App.css';
import Container from 'components/Container';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <h1 className="app__title">Phonebook</h1>
      <Container>
        <div className="form-container">
          <Form />
        </div>
        <div className="left-side-container">
          <div className="phonebook">
            <div className="phonebook__container">
              <Filter />
              <h2 className="app__title">Contacts</h2>
              <Contacts />
            </div>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
