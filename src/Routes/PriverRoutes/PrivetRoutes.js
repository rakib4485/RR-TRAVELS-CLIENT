import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContexts } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {

    const{ user, loader } = useContext(AuthContexts);
    const location = useLocation();


    if(loader){
        return (
            <div className = "d-flex justify-content-center">
                <Spinner className = "mx-auto" animation="grow" variant="info" />
            </div>
        )
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children;
}
export default PrivetRoutes;