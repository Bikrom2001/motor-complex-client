import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='h-screen w-full flex items-center justify-center'><div className="w-16 h-16  border-4 border-dashed rounded-full animate-spin dark:border-yellow-500"></div></div>
    }
    if(user){
        return children ;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;