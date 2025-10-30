import { useSelector, useDispatch } from 'react-redux';
import { switchEmailNotifications } from '../../redux/actions';

// Finally a component that actually uses the props
const EmailToggle = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="drilling-component">
      <h5>Email Toggle</h5>
      <p>
        Current email notifications: {user.notifications.email ? 'ON' : 'OFF'}
      </p>

      <button
        onClick={() => dispatch(switchEmailNotifications())}
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
