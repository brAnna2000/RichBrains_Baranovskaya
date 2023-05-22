import { avatar, calendar, closeBlack, edit, map, trashRed, phone } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { OPEN_DELETE_CLIENT_FORM, OPEN_EDIT_CLIENT_FORM, CLOSE_CLIENT_INFO_FORM } from '../../../constants';

import './ClientInfoForm.css';

function ClientInfoForm() {
  const dispatch = useDispatch();
  const clientInfo = useSelector(state => state.openClientInfoForm);

  const closeForm = () => {
    dispatch({type: CLOSE_CLIENT_INFO_FORM});
  }

  const openEditClientForm = () => {
    dispatch({type: CLOSE_CLIENT_INFO_FORM});
    dispatch({type: OPEN_EDIT_CLIENT_FORM, clientData: clientInfo});
  }

  const openDeleteClientForm = () => {
    dispatch({type: CLOSE_CLIENT_INFO_FORM});
    dispatch({type: OPEN_DELETE_CLIENT_FORM, clientId: clientInfo.id});
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