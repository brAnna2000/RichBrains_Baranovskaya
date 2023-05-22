import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import AddClientButton from './components/ui/AddClientButton/AddClientButton';
import ClientsTable from './components/ClientsTable/ClientsTable';
import Modal from './components/Modal/Modal';
import Notification from './components/ui/Notification/Notification';

import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const state = useSelector(state => state);

  const showModal = state.openAuthForm || state.openAddClientForm || state.openEditClientForm || state.openDeleteClientForm || state.openClientInfoForm;
  return (
    <div className="App">
      {state.showNotification &&
        <Notification/>
      }
      {showModal &&
        <Modal/>
      }
      <Header/>
      <div className="container">
        {state.authorized && 
          <AddClientButton/>
        }
        <Filters/>
        <ClientsTable/>
      </div>
    </div>
  );
}

export default App;
