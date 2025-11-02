import UsersList from '../components/UsersList';
import Slow from '../components/Slow';

const Debugging = () => {
  return (
    <div className="content-section">
      <h2 className="section-title">Debugging</h2>

      <UsersList />
      <hr />

      <Slow />
    </div>
  );
};

export default Debugging;
