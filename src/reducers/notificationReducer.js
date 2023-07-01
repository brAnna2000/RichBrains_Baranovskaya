import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../constants/index';

const defaultState = {
  showNotification: false
};

export const notificationReducer = (state = defaultState, action) => {
  switch (action.type){
    case SHOW_NOTIFICATION:
      return {...state, showNotification: action.notification};
    case HIDE_NOTIFICATION:
      return {...state, showNotification: false};
    default:
      return state;
  }
}

export const showNotificationAction = (notification) => ({type: SHOW_NOTIFICATION, notification});
export const hideNotificationAction = () => ({type: HIDE_NOTIFICATION});