import UsersList from '../components/UsersList';
import Slow from '../components/Slow';

const Debugging = () => {
  return (
    <div className="content-section">
      <h2 className="section-title">Debugging</h2>

      <h3>Profile example:</h3>
      <Slow />
      <hr />

      <h3>Exercise:</h3>
      <UsersList />
    </div>
  );
};

export default Debugging;
