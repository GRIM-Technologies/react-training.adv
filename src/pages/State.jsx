import UserForm from '../components/user/UserForm';
import UserInfo from '../components/user/UserInfo';
import { PropDrillingDemo } from '/src/components/prop-drilling';

const State = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">State</h2>
      <PropDrillingDemo />
      <UserInfo />
      <UserForm />
    </section>
  );
};

export default State;
