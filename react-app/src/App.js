import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/SplashPage";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import LogoutButton from "./components/auth/LogoutButton"
import Banner from "./components/Banner";
import Footer from "./components/Footer"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Pokemons from "./components/Pokemons"
import PokemonStage from "./components/PokemonStage"
import { authenticate } from "./services/auth";
import { DragDropContext } from 'react-beautiful-dnd'
import './App.css'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/team-builder" authenticated={authenticated}>
          <div className='team-builder_container'>
            <Banner />
            {/* <DragDropContext onDragEnd={onDragEnd}> */}
            <Pokemons />
            <PokemonStage />
            {/* </DragDropContext> */}
          </div>
        </ProtectedRoute>
        <Route exact path="/">
          {/* <Banner /> */}
          <Splash authenticated={authenticated}
            setAuthenticated={setAuthenticated}/>
          {/* <LogoutButton authenticated={authenticated}
            setAuthenticated={setAuthenticated}/> */}
          {/* <Footer /> */}
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/app" exact={true} authenticated={authenticated}>
          <NavBar />
          <LogoutButton authenticated={authenticated}
            setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
