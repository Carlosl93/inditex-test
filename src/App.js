import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";

import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";

const URLS = {
  HOME: {
    path: "/",
    component: ItemList,
    exact: true,
    index: true,
  },
  ITEM_DETAIL: {
    path: "/item/:itemId",
    component: ItemDetail,
  },
};

function App() {
  const urlKeys = Object.keys(URLS);
  return (
    <Router>
      <Switch>
        <Layout>
          {urlKeys.map((url) => {
            const { path, component, ...rest } = URLS[url];
            return (
              <Route path={path} component={component} key="path" {...rest} />
            );
          })}
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
