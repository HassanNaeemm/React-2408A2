import { Navigate } from "react-router-dom";
import Login from "./Login";

function AuthGuard({children})
{
    var valid = true;
    
    if(valid === true)
    {
        return children;
    }
    else
    {
        <Navigate to={<Login/>} replace/>
    }
}
export default AuthGuard;
