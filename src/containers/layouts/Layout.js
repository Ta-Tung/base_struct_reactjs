import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import {useDispatch, useStore, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

// const selectTodos = state => state.todos

export default function App() {
    // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
    </div>
  );
}
