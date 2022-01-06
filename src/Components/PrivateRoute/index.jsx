import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PrivateRoute({component: RouteComponent}) {
    const logged = useSelector((state) => state.login.isLogged);

    if(logged) {
        return <RouteComponent />
    }
    
    return <Navigate to="/sign-in" />
}

export default PrivateRoute;