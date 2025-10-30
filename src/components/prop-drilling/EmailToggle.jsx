import { useSelector, useDispatch } from 'react-redux';
import { toggleEmailNotifications, startTransfer } from '../redux/userSlice';

const EmailToggle = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleEmailNotifications());
  };

  const handleTransfer = () => {
    dispatch(startTransfer());
  };

  return (
    <div className="drilling-component">
      <h5>Email Toggle</h5>
      <p>
        Current email notifications: {user.notifications.email ? 'ON' : 'OFF'}
      </p>
      <button
        onClick={handleToggle}
        className={`btn ${user.notifications.email ? 'btn--secondary' : 'btn--success'}`}
      >
        Turn Email Notifications {user.notifications.email ? 'OFF' : 'ON'}
      </button>

      <hr />
      <p>Status: {user.status}</p>
      <button onClick={handleTransfer} className="btn btn--primary">
        Start Money Transfer
      </button>
    </div>
  );
};

export default EmailToggle;
