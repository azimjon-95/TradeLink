import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from './routes/Routes';
import AuthRoute from "./authentication/AuthRoute";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element, protected: isProtected }, index) => (
          <Route
            key={index}
            path={path}
            element={
              isProtected ? <AuthRoute>{element}</AuthRoute> : element
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
