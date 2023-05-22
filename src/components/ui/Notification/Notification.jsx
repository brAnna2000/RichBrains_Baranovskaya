import { alertCircle, check, closeWhite } from '../../../assets/img/index';

import { HIDE_NOTIFICATION } from '../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './Notification.css';

function Notification() {
    const dispatch = useDispatch();
    const showNotification = useSelector(state => state.showNotification);

    const closeNotification = () => {
        dispatch({type: HIDE_NOTIFICATION});
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            closeNotification();
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
        
    return (
        <div className="notification">
            <div className={showNotification.type === 'success' ? ' notification_success' : ' notification_warning'}>
                <img src={showNotification.type === 'success' ? check : alertCircle} alt="notification_icon"/>
                <p>{showNotification.message}</p>
                <img src={closeWhite} alt="close" onClick={() => closeNotification()}/>
            </div>
        </div>
    );
}

export default Notification;