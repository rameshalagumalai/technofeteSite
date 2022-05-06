import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ path, children }) {
  const user = false;

  if (!user) return <Navigate to={path} />;
  else return children;
}
