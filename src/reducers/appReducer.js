const initialState = {
  name: 'John Doe',
  email: 'john.doe@bank.com',
  notifications: {
    email: true,
    sms: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'switch_email_notifications': {
      console.log('a intrat');

      return {
        ...state,
        notifications: {
          ...state.notifications,
          email: !state.notifications.email,
        },
      };
    }

    default:
      return state;
  }
}

export default appReducer;
