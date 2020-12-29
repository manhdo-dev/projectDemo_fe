import { useEffect, useState, createContext, useContext } from "react";
import { Redirect } from "react-router-dom";
import { getAccessToken, getRoles } from "./token";

const AuthContext = createContext({
  loading: true,
  data: null,
  roles: [],
});

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const Authority = ({ roles, Render, to = "/login", Loading = <div /> }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useAuth();

  if (auth.loading) {
    return Loading;
  }

  if (roles && roles.length) {
    // check condition
    console.info("check condition of roles");

    if (roles.some((s) => auth.roles.includes(s))) {
      return <Render />;
    }

    return <Redirect to={to} />;
  }

  return <Render />;
};

export const AuthProvider = ({ children, Loading }) => {
  const [auth, setAuth] = useState({
    loading: true,
    data: null,
    roles: [],
  });

  useEffect(() => {
    const handleStorage = () => {
      const token = getAccessToken();

      setAuth((auth) => {
        if (auth.data !== token) {
          return {
            data: token,
            loading: false,
            roles: getRoles(),
          };
        }

        return auth;
      });
    };

    window.addEventListener("token-management", handleStorage, false);

    const token = getAccessToken();

    setAuth({
      loading: false,
      data: token,
      roles: getRoles(),
    });
    return () => {
      window.removeEventListener("token-management", handleStorage);
    };
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {auth.loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
