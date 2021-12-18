import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.js";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;