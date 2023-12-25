import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import Error from "../components/Error";
import Login from "../components/Authentication/Login"
import Dashboard from "../components/common/Dashboard"
import SignUp from "../components/Authentication/SignUp"
import ChangePassword from "../components/Authentication/ChangePassword"
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute"
import Profile from "../components/Profile/Profile";
import ProductDetail from "../components/ProductListing/ProductDetail";
import Home from "../components/common/Home";
import Product from "../components/ProductListing/Product"
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                    path="*"
                    element={
                        <PrivateRoute>
                            <Error />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute fullLayout>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        <PublicRoute fullLayout>
                            <SignUp />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/change-password"
                    element={
                        <PrivateRoute fullLayout>
                            <ChangePassword />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }

                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/product"
                    element={
                        <PrivateRoute>
                            <Product />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/product/:id"
                    element={
                        <PrivateRoute>
                            <ProductDetail />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRouter;
