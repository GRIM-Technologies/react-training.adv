import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increment = () => {
    dispatch({ type: 'user/count/increment', payload: count + 1 });
    dispatch({ type: 'user/count/increment', payload: count + 1 });
    dispatch({ type: 'user/count/increment', payload: count + 1 });
  };

  return (
    <>
      <h3>Batching:</h3>
      <button className="btn btn--primary" onClick={increment}>
        Increment {count}
      </button>
    </>
  );
};

export default Counter;
