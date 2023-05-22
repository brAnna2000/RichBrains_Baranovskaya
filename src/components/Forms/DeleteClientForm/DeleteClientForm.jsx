import { closeBlack } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { SHOW_NOTIFICATION, CLOSE_DELETE_CLIENT_FORM, SET_CLIENTS_LIST } from '../../../constants';
import axios from 'axios';

import './DeleteClientForm.css';

function DeleteClientForm() {
  const dispatch = useDispatch();

  const authorized = useSelector(state => state.authorized);
  const clientId = useSelector(state => state.openDeleteClientForm);
  const clientsList = useSelector(state => state.clientsList);

  const deleteClient = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/clients/remove?id=${clientId}`, {headers: { Authorization: authorized }})
    .then(function (response){
        console.log(response);
        const updatedClientsData = clientsList.slice(0);
        findUser(updatedClientsData);

        dispatch({type: SET_CLIENTS_LIST, clientsListData: updatedClientsData});
        dispatch({type: CLOSE_DELETE_CLIENT_FORM})
        dispatch({type: SHOW_NOTIFICATION, notification:{type: "success", message: "Client was deleted successfully"}});
    })
    .catch(() => dispatch({type: SHOW_NOTIFICATION, notification:{type: "warning", message: "Something went wrong!"}}));
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