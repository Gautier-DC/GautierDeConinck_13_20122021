import React from "react";
import { Navigate } from "react-router-dom";
import { useLogged } from "../../CustomHooks";


function PrivateRoute({component: RouteComponent}) {
    const logged = useLogged();;

    if(logged) {
        return <RouteComponent />
    }
    
    return <Navigate to="/sign-in" />
}

export default PrivateRoute;