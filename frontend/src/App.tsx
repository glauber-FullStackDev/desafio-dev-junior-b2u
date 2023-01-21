import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CustomerGuardedRoute from "./components/common/CustomerGuardedRoute";

const CustomersPage = React.lazy(() => import('./pages/CustomersPage'));
const ForgotPage = React.lazy(() => import('./pages/ForgotPage'));
const ForgotResponsePage = React.lazy(() => import('./pages/ForgotResponsePage'));

const App = () => {
  
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/forgot-response" element={<ForgotResponsePage />} />
          <Route
            path="/customer"
            element={
              <CustomerGuardedRoute>
                <CustomersPage></CustomersPage>
              </CustomerGuardedRoute>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>

          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;