import { avatar, closeBlack, calendar } from '../../../assets/img';

import { CLOSE_ADD_CLIENT_FORM, SHOW_NOTIFICATION, SET_CLIENTS_LIST } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SelectBirthDay from '../../ui/SelectBirthDay/SelectBirthDay';
import CountrySelector from '../../ui/SelectCountry/SelectCountry';
import Phone from '../../ui/PhoneInput/PhoneInput';

import './AddClientForm.css';

function AddClientForm() {
    const authorized = useSelector(state => state.authorized);
    const clientsList = useSelector(state => state.clientsList);

    const [newUserData, setNewUserData] = useState({
      name: 'Anna', 
      surname: 'Baranovskaya',
      country: 'Belarus',
      age: '19.06.2000',
      phone: '+375298885270',
    });
    const dispatch = useDispatch();

    const signFormAdd = () => {
      if(filledForm()){
        console.log(newUserData)
        axios.post('http://localhost:3333/clients/add', newUserData, {headers: { Authorization: authorized }})
        .then(function (response){
          console.log(response);
          const updatedClientsData = clientsList.slice(0);
          updatedClientsData.push(response.data.client);

          dispatch({type: SET_CLIENTS_LIST, clientsListData: updatedClientsData});
          dispatch({type: CLOSE_ADD_CLIENT_FORM});
          dispatch({type: SHOW_NOTIFICATION, notification:{type: "success", message: "New client was added successfully"}});
        })
        .catch((error) => console.log(error));
      }else{
        dispatch({type: SHOW_NOTIFICATION, notification:{type: "warning", message: "Please fill the form!"}});
      }
    }

    const filledForm = () => {
      for(const param in newUserData){
        if(!newUserData[param]){
          return false
        } 
      }
      return true
    }

    const closeForm = () => {
      dispatch({type: CLOSE_ADD_CLIENT_FORM});
    }
    return (
        <>
          <img src={closeBlack} alt="close" className='close' onClick={() => closeForm()}/>
          <h1>New client</h1>
          <div>
            <img src={avatar} alt="user" className='user_img'/>
            <form>
              <div className='full_name'>
                <label>
                    First Name
                    <input type="text" value={newUserData.name}  onChange={(e) => setNewUserData({...newUserData, name: e.target.value})}/>
                </label>
                <label>
                    Last Name
                    <input type="text" value={newUserData.surname}  onChange={(e) => setNewUserData({...newUserData, surname: e.target.value})}/>
                </label>
              </div>
              <label>
                  Date of birth
                  <img src={calendar} alt="calendar" className='calendar'/>
                  <SelectBirthDay updateAgeValue={(value) => setNewUserData({...newUserData, age: newUserData.age ? value : '2022-04-17'})}/>
              </label>
              <label>
                  Country
                  <CountrySelector clientValue={newUserData.country} updateСountryValue={(value) => setNewUserData({...newUserData, country: value})}/>
              </label>
              <label>
                  Telephone
                  <div className='phone_type'>
                    <select>
                      <option value="mobile">Mob</option>
                      <option value="phone">Phone</option>
                      <option value="fax">Fax</option>
                    </select>
                    <Phone clientValue={newUserData.phone} updatePhoneValue={(value) => setNewUserData({...newUserData, phone: value})}/>
                  </div>
              </label>
            </form>
          </div>
          <div>
            <button className='blue_el' onClick={() => signFormAdd()}>Save</button>
            <button className='white_el' onClick={() => closeForm()}>Cancel</button>  
          </div>
        </>  
    );
}

export default AddClientForm;