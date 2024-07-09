import { Main_user } from "./pages/Main_user";
import { Main_guest } from "./pages/Main_guest";

const routes = [
    { path: '/*', element: <Main_guest /> },
    { path: '/client', element: <Main_user /> }
]

export default routes