import React from 'react';
import Menu from '../Menu';

export interface WithLayoutInterface {
  index?: boolean;
}

export interface LayoutInterface extends WithLayoutInterface {
  children: React.ReactNode;
}

const Layout = (props: LayoutInterface) => {
  const { children, index } = props;

  return (
    <div>
      <div>{index ? 'Index' : 'Not Index'}</div>
      <div>
        <Menu/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default React.memo(Layout);