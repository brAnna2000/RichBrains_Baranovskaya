import { avatar, map, phone, calendar, edit, trashBlack } from '../../assets/img';

import { openInfoClientFormAction } from '../../reducers/infoClientFormReducer';
import { openDeleteClientFormAction } from '../../reducers/deleteClientFormReducer';
import { openEditClientFormAction } from '../../reducers/editClientFormReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './ClientCard.css';

function ClientCard({data}) {
  const dispatch = useDispatch();
  const authorized = useSelector(state => state.login.authorized);
  
  const editForm = (e) => {
    e.stopPropagation();
    dispatch(openEditClientFormAction(data));
  }
  const deleteForm = (e) => {
    e.stopPropagation();
    dispatch(openDeleteClientFormAction(data.id));
  }
  const openClientInfoForm = () => {
    axios.post('http://localhost:3333/clients/get', {id: data.id}, {headers: { Authorization: authorized }})
      .then(function (response){
        console.log(response);
        dispatch(openInfoClientFormAction(response.data.client));
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