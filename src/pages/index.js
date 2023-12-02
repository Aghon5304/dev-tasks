import React from 'react';

import { AppHeader } from '../components/TitleText/appheader';
import { CheckContent } from '../components/TitleText/CheckContent';
import { TitleText } from '../components/TitleText/TitleText';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
