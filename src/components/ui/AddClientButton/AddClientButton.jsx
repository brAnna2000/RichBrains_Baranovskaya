import { plus } from '../../../assets/img';

import { useDispatch } from 'react-redux';
import { OPEN_ADD_CLIENT_FORM } from '../../../constants';

import './AddClientButton.css';

function AddClientButton() {
    const dispatch = useDispatch();

    const openClientForm = () => {
        dispatch({type: OPEN_ADD_CLIENT_FORM});
    }
    return (
        <button className='addClientButton' onClick={() => openClientForm()}>
            <img src={plus} alt="plus"/>
        </button>
    );
}

export default AddClientButton;