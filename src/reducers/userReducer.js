const initialState = {
  name: '',
  notifications: {
    sms: false,
    email: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/notifications/email__REQUESTED':
      return {
        ...state,
        notifications: { ...state.notifications, email: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
