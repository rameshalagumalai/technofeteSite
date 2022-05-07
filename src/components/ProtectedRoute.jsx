import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ type, path, children }) {
  const { user } = useAuth();
  if (type) {
    if (!user) return <Navigate to={path} />;
    else return children;
  } else {
    if (user) return <Navigate to={path} />;
    else return children;
  }
}
