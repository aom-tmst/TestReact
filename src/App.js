import WordCards from './components/WordCards';
import { Button } from 'antd';
import { Row, Col, Input, Select } from 'antd';
import Styled from 'styled-components';
import { useState } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Addword from './pages/Addword';
import React from 'react';

const StyleWrapper = Styled.div`
padding: 20px 10%;
@media(max-width: 425px){
  margin: 20px 0px;
}

.select-types{
  width : 100%;
  margin: 10px;
}

.formpadding{
  margin: 10px;
}
`;
function App(props) {
  return (
    <StyleWrapper>
      <div>
        <Link to="/">Home Page</Link>
      </div>
      <div>
        <Link to="/add-Word">Add-Word</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <Switch>
        <Route path="/add-Word">
          <Addword />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </StyleWrapper>
  );
}

export default App;
