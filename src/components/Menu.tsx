import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to={'/'}>Index</Link>
      </li>
      <li>
        <Link to={'/saga-test'}>Saga Test</Link>
      </li>
    </ul>
  );
};

export default React.memo(Menu);