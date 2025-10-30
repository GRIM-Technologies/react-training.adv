const initialState = {
  name: '',
  notifications: {
    sms: false,
    email: false,
  },
  count: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/notifications/email__REQUESTED':
      return {
        ...state,
        notifications: { ...state.notifications, email: action.payload },
      };
    case 'user/count/increment':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
