import Login from "../Page/Login.jsx";
import Dump from "../Page/Dump.jsx";
import {useRoutes} from "hookrouter";

const route = {
    "/" : ()=> <Login/>,
    
    "/dump" : ()=> <Dump/>
}

function Router(){
  const router = useRoutes(route);
  return router;
}

export default Router;
