import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)


    if (user) {
        return children
    }
    if (loading) {
        return <Loading />
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />

};

export default PrivateRoute;