import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import { useState, useEffect } from "react";

const AllRoutes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("@bitCar:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <LoginPage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        }
      />
      <Route
        exact
        path="/home"
        element={
          <HomePage
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        }
      />
      <Route
        path="/register"
        element={<RegisterPage authenticated={authenticated} />}
      />
    </Routes>
  );
};
export default AllRoutes;
