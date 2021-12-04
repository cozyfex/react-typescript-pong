import React from 'react';
import withLayout from '../hoc/withLayout';

const Index = () => {
  return (
    <div>
      Index
    </div>
  );
};

export default React.memo(withLayout(Index, { index: true }));