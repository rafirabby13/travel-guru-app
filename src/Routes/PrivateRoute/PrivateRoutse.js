import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context.js';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutse = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Spinner animation="border" variant="warning" />
        
    }    
        if (!user) {
            return <Navigate to='/login' state={{from: location}} replace></Navigate>

        }
        return children;
    
};

export default PrivateRoutse;