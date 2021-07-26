import React from "react";

const HomePage = React.lazy(() => import("./pages/Home"));

export default [
  {
    path: '/',
    Component: HomePage
  }
]