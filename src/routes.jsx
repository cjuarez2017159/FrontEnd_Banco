import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { ViewAdmin } from "./pages/admin";
import ProtectedRoute from './components/ProtectedRoute';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: "/", element: <DashboardPage /> },
    { path: "/admin", element: <ProtectedRoute requiredRole="admin"><ViewAdmin /></ProtectedRoute> }
];

export default routes;
