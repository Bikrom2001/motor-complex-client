import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Share/Loading/Loading";
import { AuthContext } from "../../context/AuthProvider";
import AdminUser from "../../Hooks/AdminUser";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = AdminUser(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;