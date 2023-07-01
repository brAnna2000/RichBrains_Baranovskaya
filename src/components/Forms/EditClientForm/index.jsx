import { avatar, closeBlack, calendar, trashRed } from '../../../assets/img';

import { CLOSE_EDIT_CLIENT_FORM } from '../../../constants';
import { showNotificationAction } from '../../../reducers/notificationReducer';
import { openDeleteClientFormAction } from '../../../reducers/deleteClientFormReducer';
import { closeEditClientFormAction } from '../../../reducers/editClientFormReducer';
import { setClientsListAction } from '../../../reducers/clientsListReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

import SelectBirthDay from '../../ui/SelectBirthDay';
import CountrySelector from '../../ui/SelectCountry';
import Phone from '../../ui/PhoneInput';

function EditClientForm() {
    const clientData = useSelector(state => state.editClient.openEditClientForm);
    const clientsList = useSelector(state => state.clientsList.clientsList);
    const authorized = useSelector(state => state.login.authorized); 

    const dispatch = useDispatch();

    const [editClientData, seteditClientData] = useState({   
        name: clientData.name, 
        surname: clientData.surname, 
        country: clientData.country,
        phone: clientData.phone, 
        age: clientData.age,
        id: clientData.id
    });
    
    const signForm = () => {
        if(filledForm()){
        axios.put('http://localhost:3333/clients/edit', editClientData, {headers: { Authorization: authorized }})
        .then(function (response){
            console.log(response);
            const updatedClientsDataEdit = clientsList.slice(0);
            updateUser(updatedClientsDataEdit);
            dispatch(setClientsListAction(updatedClientsDataEdit));
            dispatch(closeEditClientFormAction());
            dispatch(showNotificationAction({type: "success", message: "New client was added successfully"}));
        })
        .catch((error) => console.log(error));
        }else{
            dispatch(showNotificationAction({type: "warning", message: "Please fill the form!"}));
        }
    }

    const filledForm = () => {
        for(const param in editClientData){
            if(!editClientData[param]){
                return false
            } 
        }
        return true
    }

    const updateUser = (updatedClientsDataEdit) => {
        for(const client in updatedClientsDataEdit){
            if(updatedClientsDataEdit[client].id === editClientData.id){
                updatedClientsDataEdit[client] = editClientData;
                return
            }
        }
    }

    const closeForm = () => {
        dispatch({type: CLOSE_EDIT_CLIENT_FORM});
    }

    const openDeleteClientForm = () => {
        dispatch({type: CLOSE_EDIT_CLIENT_FORM});
        dispatch(openDeleteClientFormAction(editClientData.id));
    }
    return (
        <>
            <img src={closeBlack} alt="close" className='close' onClick={() => closeForm()}/>
            <h1>Edit client</h1>
            <div>
            <img src={avatar} alt="user" className='user_img'/>
            <form>
                <div className='full_name'>
                <label>
                    First Name
                    <input type="text" value={editClientData.name}  onChange={(e) => seteditClientData({...editClientData, name: e.target.value})}/>
                </label>
                <label>
                    Last Name
                    <input type="text" value={editClientData.surname}  onChange={(e) => seteditClientData({...editClientData, surname: e.target.value})}/>
                </label>
                </div>
                <label>
                    Date of birth
                    <img src={calendar} alt="calendar" className='calendar'/>
                    <SelectBirthDay clientValue={editClientData.age} updateAgeValue={(value) => seteditClientData({...editClientData, age: value})}/>
                </label>
                <label>
                    Country
                    <CountrySelector clientValue={editClientData.country} updateСountryValue={(value) => seteditClientData({...editClientData, country: value})}/>
                </label>
                <label>
                    Telephone
                    <div className='phone_type'>
                    <select>
                        <option value="mobile">Mob</option>
                        <option value="phone">Phone</option>
                        <option value="fax">Fax</option>
                    </select>
                    <Phone clientValue={editClientData.phone} updatePhoneValue={(value) => seteditClientData({...editClientData, phone: value})}/>
                    </div>
                </label>
            </form>
            </div>
            <div>
                <button className='blue_el' onClick={() => signForm()}>Save</button>
                <button className='white_el' onClick={() => closeForm()}>Cancel</button>
                <button className='red_el' onClick={() => openDeleteClientForm()}><img src={trashRed} alt="delete client"/>  Delete client</button>  
            </div>
        </>  
    );
}

export default EditClientForm;