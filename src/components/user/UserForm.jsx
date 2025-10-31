import { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserForm = () => {
  const [requestedUserId, setRequestedUserId] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        min={0}
        max={10}
        value={requestedUserId}
        onChange={(e) => setRequestedUserId(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: 'USER_FETCH_REQUESTED',
            payload: { userId: requestedUserId },
          })
        }
      >
        Get user
      </button>
    </div>
  );
};

export default UserForm;
