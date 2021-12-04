import React from 'react';
import Layout, { WithLayoutInterface } from '../components/layouts/Layout';

const withLayout = <P extends object> (
  Component: React.ComponentType<P>,
  withProps?: WithLayoutInterface,
) => (props: any) => (
  <Layout index={withProps?.index}>
    <Component {...props} />
  </Layout>
);

export default withLayout;