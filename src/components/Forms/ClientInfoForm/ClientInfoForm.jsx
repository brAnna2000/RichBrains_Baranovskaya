import { avatar, calendar, closeBlack, edit, map, trashRed, phone } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { OPEN_EDIT_CLIENT_FORM } from '../../../constants';

import { openDeleteClientFormAction } from '../../../reducers/deleteClientFormReducer';
import { closeInfoClientFormAction } from '../../../reducers/infoClientFormReducer';

import './ClientInfoForm.css';

function ClientInfoForm() {
  const dispatch = useDispatch();
  const clientInfo = useSelector(state => state.clientInfo.openClientInfoForm);

  const closeForm = () => {
    dispatch(closeInfoClientFormAction());
  }

  const openEditClientForm = () => {
    dispatch(closeInfoClientFormAction());
    dispatch({type: OPEN_EDIT_CLIENT_FORM, clientData: clientInfo});
  }

  const openDeleteClientForm = () => {
    dispatch(closeInfoClientFormAction());
    dispatch(openDeleteClientFormAction(clientInfo.id));
  }
  return (
    <form className='info_form'>
        <img src={closeBlack} alt="close" className='close' onClick={() => closeForm()}/>
        <div className='client_options'>
            <span onClick={() => openEditClientForm()}><img src={edit} alt="edit"/> Edit profile</span>
            <span onClick={() => openDeleteClientForm()} className='red_el'><img src={trashRed} alt="remove"/> Delete client</span>
        </div>
        <img src={avatar} alt="avatar" className='user_img'/>
        <h1>{clientInfo.name} {clientInfo.surname}</h1>
        <ul>
            <li><img src={map} alt="map"/> {clientInfo.country}</li>
            <li><img src={phone} alt="phone"/> {clientInfo.phone}</li>
            <li><img src={calendar} alt="calendar"/> {clientInfo.age}</li>
        </ul>
        <button className='white_el' onClick={() => closeForm()}>Close</button>
    </form>
  );
}

export default ClientInfoForm;