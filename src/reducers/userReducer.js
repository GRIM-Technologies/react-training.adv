const initialState = {
  name: '',
  notifications: {
    sms: false,
    email: false,
  },
  progress: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'user/notifications/email__REQUESTED':
      return {
        ...state,
        progress: true,
      };
    case 'user/notifications/email__SUCCEEDED':
      console.log('Updating settings... Succeeded!');
      return {
        ...state,
        notifications: { ...state.notifications, email: action.payload },
      };
    case 'user/notifications/email__COMPLETED':
      console.log('Updating settings... Done!');
      return {
        ...state,
        progress: false,
      };
    default:
      return state;
  }
};

export default userReducer;
