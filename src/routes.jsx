import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { viewAdmin } from "./pages/Admin/ViewAdminPage";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: "/", element: <DashboardPage/>},
    {path: "/admin", element: <viewAdmin/>}
]

export default routes