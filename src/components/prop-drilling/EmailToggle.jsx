import { useDispatch, useSelector } from 'react-redux';

// Finally a component that actually uses the props
const EmailToggle = () => {
  const dispatch = useDispatch();
  const { notifications, progress } = useSelector((state) => state.user);

  const handleToggle = () => {
    dispatch({
      type: 'user/notifications/email__REQUESTED',
      payload: !notifications.email,
    });
  };

  return (
    <div className="drilling-component">
      <h5>Email Toggle</h5>
      <p>Current email notifications: {notifications.email ? 'ON' : 'OFF'}</p>
      <button
        onClick={handleToggle}
        className={`btn ${
          notifications.email ? 'btn--secondary' : 'btn--success'
        }`}
      >
        {progress && 'Updating...'}
        {!progress &&
          `Turn Email Notifications ${notifications.email ? 'OFF' : 'ON'}`}
      </button>
    </div>
  );
};

export default EmailToggle;
