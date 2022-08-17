import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BasicGrid } from './components/BasicGrid';
import { Seo } from './components/Seo';

const GlobalStyle = createGlobalStyle`
body{
  background: rgb(241,166,179);
}
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Seo/>
      <BasicGrid/>
    </>
  );
};
