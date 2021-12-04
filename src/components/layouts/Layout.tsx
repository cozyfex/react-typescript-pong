import React from 'react';
import Menu from '../Menu';

export interface IWithLayout {
  index?: boolean;
}

export interface ILayout extends IWithLayout {
  children: React.ReactNode;
}

const Layout = (props: ILayout) => {
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