import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { Main_guest } from "./pages/Main_guest";


const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: "/", element: <DashboardPage/>},
    { path: '/*', element: <Main_guest /> }
]

export default routes