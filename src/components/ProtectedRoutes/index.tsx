import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  if (currentUser) {
    navigate("/home");
  }

  return currentUser != null ? <Outlet /> : <Navigate to={"/login"} />;
};
