import { Outlet , Navigate} from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from "../context/ConTexT";

const LoginRouting = () => {
    let {userauth} = useContext(AuthContext)
    return(
        
        userauth ? <Outlet /> : <Navigate to='/login'/>
        
    )
}

export default LoginRouting
