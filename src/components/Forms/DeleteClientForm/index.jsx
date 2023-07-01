import { closeBlack } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { setClientsListAction } from '../../../reducers/clientsListReducer';
import { showNotificationAction } from '../../../reducers/notificationReducer';
import { CLOSE_DELETE_CLIENT_FORM } from '../../../constants';
import axios from 'axios';

import './index.css';

function DeleteClientForm() {
  const dispatch = useDispatch();

  const authorized = useSelector(state => state.login.authorized);
  const clientId = useSelector(state => state.deleteClient.openDeleteClientForm);
  const clientsList = useSelector(state => state.clientsList.clientsList);

  const deleteClient = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/clients/remove?id=${clientId}`, {headers: { Authorization: authorized }})
    .then(function (response){
        console.log(response);
        const updatedClientsData = clientsList.slice(0);
        findUser(updatedClientsData);

        dispatch(setClientsListAction(updatedClientsData));
        dispatch({type: CLOSE_DELETE_CLIENT_FORM})
        dispatch(showNotificationAction({type: "success", message: "Client was deleted successfully"}));
    })
    .catch(() => dispatch(showNotificationAction({type: "warning", message: "Something went wrong!"})));
  }

  const findUser = (updatedClientsData) => {
    for(const client in updatedClientsData){
        if(updatedClientsData[client].id === clientId){
            updatedClientsData.splice(client, 1);
            return
        }
    }
  }

  const closeForm = () => {
    dispatch({type: CLOSE_DELETE_CLIENT_FORM});
  }
  return (
    <form className='delete_form'>
        <img src={closeBlack} alt="close" className='close' onClick={() => closeForm()}/>
        <h1>Delete</h1>
        <p>Are you sure you want to delete client?</p>
        <button className='blue_el red_button' onClick={(e) => deleteClient(e)} >Yes, delete</button>
        <button className='white_el' onClick={() => closeForm()}>No, close</button>
    </form>
  );
}

export default DeleteClientForm;