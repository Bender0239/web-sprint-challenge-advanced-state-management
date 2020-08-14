import React from "react";
import styled from 'styled-components'
import SmurfForm from './SmurfForm'
import SmurfCard from './SmurfCard'


const StyledApp = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  width: 40%;
  margin: 0 auto;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  return (
    <StyledApp className="App">
      <h1>Smurf Form</h1>
      <SmurfForm/>
      <SmurfCard />
    </StyledApp>
  );
  
}

export default App;
