import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Layout from './containers/layouts/Layout'

export default function App() {
  return (
    <Layout></Layout>
  );
}
