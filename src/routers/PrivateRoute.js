import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const user = useSelector(state => state.auth.currentUser);

    return user
        ? children
        : <Navigate to="/auth/login" />
}