import { createContext } from "react";
import Login from "../pages/Login.js"

export const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const user= JSON.parse(localStorage.getItem("user"))
    console.log(user,"context")

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>

    )

}
export default UserProvider;