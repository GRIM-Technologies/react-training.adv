import { useSelector, useDispatch } from 'react-redux';
import { toggleEmailNotifications } from '../redux/userSlice';

const EmailToggle = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="drilling-component">
      <h5>Email Toggle</h5>
      <p>
        Current email notifications: {user.notifications.email ? 'ON' : 'OFF'}
      </p>

      <button
        onClick={() => dispatch(toggleEmailNotifications())}
        className={`btn ${
          user.notifications.email ? 'btn--secondary' : 'btn--success'
        }`}
      >
        Turn Email Notifications {user.notifications.email ? 'OFF' : 'ON'}
      </button>
    </div>
  );
};

export default EmailToggle;
