import AuthorizationForm from '../Forms/AuthorizationForm/AuthorizationForm';
import AddClientForm from '../Forms/AddClientForm/AddClientForm';
import EditClientForm from '../Forms/EditClientForm/EditClientForm';
import DeleteClientForm from '../Forms/DeleteClientForm/DeleteClientForm';
import ClientInfoForm from '../Forms/ClientInfoForm/ClientInfoForm';

import { useSelector } from 'react-redux';
import './Modal.css';

function Modal() {
    const state = useSelector(state => state);

    return (
            <div className="shadow">
                <div className={state.addClient.openAddClientForm || state.editClient.openEditClientForm ? 'modal_full_width' : 'modal_small'}>
                    {state.authorization.openAuthForm &&
                        <AuthorizationForm/>
                    }
                    {state.addClient.openAddClientForm &&
                        <AddClientForm/>  
                    }
                    {state.editClient.openEditClientForm &&
                        <EditClientForm/>
                    }
                    {state.deleteClient.openDeleteClientForm &&
                        <DeleteClientForm/>
                    }
                    {state.infoClient.openClientInfoForm &&
                        <ClientInfoForm/>
                    }
                </div>
            </div>
    );
}

export default Modal;