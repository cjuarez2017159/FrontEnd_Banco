import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Main_guest } from "./pages/Main_guest";
import { Main_user } from "./pages/Main_user"


const routes = [
    { path: '/', element: <Main_guest /> },
    { path: '/auth', element: <AuthPage /> },
    { path: "/", element: <DashboardPage /> },
    { path: '/client', element: <Main_user /> },
]

export default routes