import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { string } from "yup";
import { api } from "../services/api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  userLogin: (formdata: iFormDataUserLogin) => Promise<void>;
  userRegister: (formData: iFormDataUserRegister) => Promise<void>;
  currentUser: string | null;
}

interface iFormDataUserRegister {
  name: string;
  email: string;
  password: string;
}
interface iFormDataUserLogin {
  email: string;
  password: string;
}

interface iResponseData {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(false);

  const currentUser = localStorage.getItem("@USERID");

  const userLogin = async (formData: iFormDataUserLogin) => {
    try {
      const response = await api.post<iResponseData>("/login", formData);
      const { accessToken, user: userResponse } = response.data;
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", accessToken);
      window.localStorage.setItem("@USERID", userResponse.id);
      setUserID(userResponse.id);
      navigate("/home");
      toast.success("Login realizado! Você será redirecionado..");
    } catch (error) {
      toast.error("Login ou senha incorretos");
    } finally {
    }
  };

  const userRegister = async (formData: iFormDataUserRegister) => {
    try {
      const response = await api.post<iResponseData>("/users", formData);
      setLoading(true);
      navigate("/login");
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
