import { useEffect } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";
import { CartRoutes } from "./CartRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from "./AuthRouter";


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch])

    return (
            <Routes>
                <Route path="/auth/*" element = {
                    <PublicRoute>
                        <AuthRouter/>
                    </PublicRoute>
                }/>
                <Route path="/*" element = {
                    <PrivateRoute>
                        <CartRoutes/>
                    </PrivateRoute>
                }/>
                <Route path="*" element = { <AuthRouter/> }
                />
            </Routes>
    )
}
