import { useState } from 'react';
import { complexComputation } from '../utils';

const Slow = ({ dep }) => {
  const [n, setN] = useState(0);
  const complexResult = complexComputation();
  return (
    <button
      className="btn btn--primary"
      onClick={() => {
        setN(n + 1);
      }}
    >
      Re-render slow component ({n})
    </button>
  );
};

export default Slow;
