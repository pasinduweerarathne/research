import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// const USER_TYPES = {
//     MANAGER: "Factory Manager",
//     OWNER: "Factory Owner",
//     OFFICER: "Factory Officer"
// }

let permission = {
    "Factory Manager": 3,
    "Factory Officer": 2,
    "Factory Owner": 1
}

function ProtectedRoutes(props) {

    const token = sessionStorage.getItem("token");
    const CURRENT_USER = sessionStorage.getItem('user');
    const auth = token && token !== "" && token !== undefined;


    if (props.roleRequired) {
        console.log('auth', auth)
        console.log('CURRENT_USER', CURRENT_USER)
        console.log('props.roleRequired', props.roleRequired)
        console.log('permission[CURRENT_USER]', permission[CURRENT_USER])
        return auth ? (
            //props.roleRequired === CURRENT_USER ? (
            props.roleRequired <= permission[CURRENT_USER] ? (
                <Outlet />
            ) : (
                <Navigate to="/denied" />
            )
        ) : (
            <Navigate to="/signin" />
        )
    } else {
        return (auth ? <Outlet /> : <Navigate to="/signin" />)
    }
}
export default ProtectedRoutes
