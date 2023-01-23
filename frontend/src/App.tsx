import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import NewLoginPage from "./pages/NewLoginPage";
import SignupPage from "./pages/SignupPage";
import GuardedRoute from "./guards/GuardedRoute";

const ForgotPage = React.lazy(() => import("./pages/ForgotPage"));
const ForgotResponsePage = React.lazy(
  () => import("./pages/ForgotResponsePage")
);
const AddVehiclePage = React.lazy(() => import("./pages/AddVehiclePage"));
const ListVehiclesPage = React.lazy(() => import("./pages/ListVehiclesPage"));
const EditVehiclePage = React.lazy(() => import("./pages/EditVehiclePage"));
const VehicleDetailPage = React.lazy(() => import("./pages/VehicleDetailPage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/new-login" element={<NewLoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot" element={<ForgotPage />} />
            <Route path="/forgot-response" element={<ForgotResponsePage />} />
            <Route path="/vehicle/:id" element={<VehicleDetailPage />} />

            <Route
              path="/customer/add"
              element={
                <GuardedRoute>
                  <AddVehiclePage />
                </GuardedRoute>
              }
            />
            <Route
              path="/customer/list"
              element={
                <GuardedRoute>
                  <ListVehiclesPage />
                </GuardedRoute>
              }
            />
            <Route
              path="/customer/edit/:id"
              element={
                <GuardedRoute>
                  <EditVehiclePage />
                </GuardedRoute>
              }
            />
            <Route
              path="/customer/vehicle/:id"
              element={
                <GuardedRoute>
                  <VehicleDetailPage />
                </GuardedRoute>
              }
            />
            <Route path="*" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
