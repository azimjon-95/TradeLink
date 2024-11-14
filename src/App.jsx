import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/Routes";
import AuthRoute from "./authentication/AuthRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Suspense
      fallback={
        <div className="main_loader">
          <div id="loader"></div>
        </div>
      }
    >
      <div className="app">
        <Navbar />
        <Routes>
          {routes.map(({ path, element, protected: isProtected }, index) => (
            <Route
              key={index}
              path={path}
              element={isProtected ? <AuthRoute>{element}</AuthRoute> : element}
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
