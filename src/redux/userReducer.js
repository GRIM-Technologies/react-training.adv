import { SWITCH_EMAIL_NOTIFICATIONS } from './constants';

const initialState = {
  name: 'John Doe',
  email: 'john.doe@bank.com',
  notifications: {
    email: true,
    sms: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_EMAIL_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          email: !state.notifications.email,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
