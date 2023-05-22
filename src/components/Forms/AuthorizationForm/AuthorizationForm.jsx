import { show, closeBlack } from '../../../assets/img';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { SHOW_NOTIFICATION, LOG_IN, LOG_OUT, CLOSE_AUTH_FORM } from '../../../constants';

import axios from 'axios';
import './AuthorizationForm.css';

function AuthorizationForm() {
  const [userData, setUserData] = useState({login: 'richbrains', password: 'richbrains_test'});
  const [passwordType, setPasswordType] = useState('password');

  const dispatch = useDispatch();
  const authorized = useSelector(state => state.authorized);

  const signForm = (e) => {
    e.preventDefault();
    if(!authorized){
      axios.post('http://localhost:3333/user/login', userData)
      .then(function (response){
        console.log(response);
        dispatch({type: LOG_IN, token: response.data.token});
        dispatch({type: SHOW_NOTIFICATION, notification:{type: "success", message: "Successful authorization"}});
      })
      .catch(() => dispatch({type: SHOW_NOTIFICATION, notification:{type: "warning", message: "Something went wrong!"}}));
    }else{
      dispatch({type: LOG_OUT});
    }
  }
  const closeForm = () => {
    dispatch({type: CLOSE_AUTH_FORM});
  }
  return (
    <form className='authorization'>
        <img src={closeBlack} alt="close" className='close' onClick={() => closeForm()}/>
        <h1>{authorized ? 'Sign out': 'Sign in'}</h1>
        {authorized ?
            <p>Are you sure you want to sign out?</p>
            :
            <>
                <input placeholder={userData.login} value={userData.login} onChange={(e) => setUserData({...userData, login: e.target.value})}/>
                <label>
                    <img src={show} alt="show" onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}/>
                    <input type={passwordType} value={userData.password}  onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                </label>
            </>
        }
        <button className='blue_el' onClick={(e) => signForm(e)} >{authorized ? 'Yes, sign out': 'Sign in'}</button>
        <button className='white_el' onClick={() => closeForm()}>{authorized ? 'No, close': 'Close'}</button>
    </form>
  );
}

export default AuthorizationForm;