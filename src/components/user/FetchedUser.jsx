import { useSelector } from 'react-redux';

const FetchedUser = () => {
  const user = useSelector((state) => state);

  console.log(user);

  if (user.isLoading) {
    return <div>Loading info...</div>;
  }

  if (user.error) {
    return <div>There was an error fetching user.</div>;
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
    </div>
  );
};

export default FetchedUser;
