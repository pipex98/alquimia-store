import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const user = useSelector(state => state.auth.currentUser);

    return user
        ? <Navigate to="/" />
        : children
}