import React from 'react';

import { AppHeader } from '../components/TitleText/appheader';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
