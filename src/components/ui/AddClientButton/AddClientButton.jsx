import { plus } from '../../../assets/img';

import { useDispatch } from 'react-redux';
import { openAddClientFormAction } from '../../../reducers/addClientFormReducer';

import './AddClientButton.css';

function AddClientButton() {
    const dispatch = useDispatch();

    const openClientForm = () => {
        dispatch(openAddClientFormAction());
    }
    return (
        <button className='addClientButton' onClick={() => openClientForm()}>
            <img src={plus} alt="plus"/>
        </button>
    );
}

export default AddClientButton;