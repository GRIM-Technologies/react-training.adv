import {
  SWITCH_EMAIL_NOTIFICATIONS,
  USER_FETCH_FAILED,
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEEDED,
} from './constants';

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

    case USER_FETCH_REQUESTED:
      return {
        ...state,
        notifications: {
          ...state.notifications,
        },
        isLoading: true,
      };

    case USER_FETCH_SUCCEEDED:
      return {
        ...state,
        notifications: {
          ...state.notifications,
        },
        isLoading: false,
        error: null,
        ...action.user,
      };

    case USER_FETCH_FAILED:
      return {
        ...state,
        notifications: {
          ...state.notifications,
        },
        isLoading: false,
        error: action.message,
      };

    default:
      return state;
  }
};

export default userReducer;
