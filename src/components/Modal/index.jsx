import AuthorizationForm from '../Forms/AuthorizationForm';
import AddClientForm from '../Forms/AddClientForm';
import EditClientForm from '../Forms/EditClientForm';
import DeleteClientForm from '../Forms/DeleteClientForm';
import ClientInfoForm from '../Forms/ClientInfoForm';

import { useSelector } from 'react-redux';
import './index.css';

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