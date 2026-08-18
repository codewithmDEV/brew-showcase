import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminGuard({ children }) {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminGuard;