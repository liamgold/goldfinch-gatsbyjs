import React, { FunctionComponent } from 'react';

import Layout from '@components/Layout';

const NotFoundPage: FunctionComponent = () => (
  <Layout>
    <div>
      <h1>ERROR 404</h1>
      <p>Page cannot be found. 😒</p>
    </div>
  </Layout>
);

export default NotFoundPage;
