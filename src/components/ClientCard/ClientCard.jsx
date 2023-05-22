import { avatar, map, phone, calendar, edit, trashBlack } from '../../assets/img';

import { OPEN_EDIT_CLIENT_FORM, OPEN_DELETE_CLIENT_FORM, OPEN_CLIENT_INFO_FORM } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './ClientCard.css';

function ClientCard({data}) {
  const dispatch = useDispatch();
  const authorized = useSelector(state => state.authorized);
  
  const editForm = (e) => {
    e.stopPropagation();
    dispatch({type: OPEN_EDIT_CLIENT_FORM, clientData: data});
  }
  const deleteForm = (e) => {
    e.stopPropagation();
    dispatch({type: OPEN_DELETE_CLIENT_FORM, clientId: data.id});
  }
  const openClientInfoForm = () => {
    axios.post('http://localhost:3333/clients/get', {id: data.id}, {headers: { Authorization: authorized }})
      .then(function (response){
        console.log(response);
        dispatch({type: OPEN_CLIENT_INFO_FORM, clientData: response.data.client});
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="clientCard" onClick={() => authorized ? openClientInfoForm() : ''}>
        {authorized && 
          <div className='client_edit'>
            <img src={edit} alt="edit_client" onClick={(e) => editForm(e)}/>
            <img src={trashBlack} alt="delete_client" onClick={(e) => deleteForm(e)}/>
          </div>
        }
        <img src={avatar} alt="avatar"/>
        <p>{data.name} {data.surname}</p>
        <ul>
            <li><img src={map} alt="map"/> {data.country}</li>
            <li><img src={phone} alt="phone"/> {data.phone}</li>
            <li><img src={calendar} alt="calendar"/> {data.age}</li>
        </ul>
    </div> 
  );
}

export default ClientCard;