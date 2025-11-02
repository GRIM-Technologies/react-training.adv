import { makeUsers } from '../utils';

const UserListItem = ({ id, name, company }) => {
  let vip = false;
  if (company === 'microsoft') vip = true;

  return (
    <li>
      {name} ({id}){' '}
      {vip && (
        <b>
          <code>VIP</code>
        </b>
      )}
    </li>
  );
};

const users = makeUsers();
const UsersList = () => {
  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
