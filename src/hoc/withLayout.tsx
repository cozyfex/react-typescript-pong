import React from 'react';
import Layout, { IWithLayout } from '../components/layouts/Layout';

const withLayout = <P extends object> (
  Component: React.ComponentType<P>,
  withProps?: IWithLayout,
) => (props: any) => (
  <Layout index={withProps?.index}>
    <Component {...props} />
  </Layout>
);

export default withLayout;