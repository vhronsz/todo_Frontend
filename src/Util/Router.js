import Login from "../Page/Login.jsx";
import Dump from "../Page/Dump.jsx";
import Todo from "../Page/Todo.jsx";
import {useRoutes} from "hookrouter";

const route = {
    "/" : ()=> <Todo/>,
    "/dump" : ()=> <Dump/>,
    "/todo" : ()=> <Login/>
}

function Router(){
  const router = useRoutes(route);
  return router;
}

export default Router;
