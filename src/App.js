import React from 'react';
import styled from 'styled-components';
import Header from "./components/header";
import Card from "./components/card";
import {breakpoints, colors} from './styles/theme';


const StyledLayout = styled.main`
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
  margin-top: 2em;
  /* display: flex; */
  /* align-items: center; */
  padding: 30px 80px;
`;

function App() {
  return (
    <div>
      <Header />
      <StyledLayout>
        <Card />
      </StyledLayout>
    </div>
  );
}

export default App;
