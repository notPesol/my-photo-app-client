import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddImage from "./components/AddImage/AddImage";
import Layout from "./components/Layout/Layout";
import AllImages from "./components/AllImages/AllImages";
import SingleImage from "./components/SingleImage/SingleImage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AllImages} />
        <Route path="/add" component={AddImage} />
        <Route path="/:id" component={SingleImage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
