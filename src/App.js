import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import Header from './components/header';
import Sidebar from './components/sidebar';
import styled from 'styled-components';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/login';

function App() {

  const [user, loading] = useAuthState(auth)

  return (
    <div className="App">

      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />

              <Routes>
                <Route path="/" element={<Home />} exact>
                </Route>
              </Routes>
            </AppBody>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  height: 100%;
  display: flex;
`;

