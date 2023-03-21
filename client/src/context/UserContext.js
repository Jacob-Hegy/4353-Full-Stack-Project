import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UseContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:4000/user")
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch((err) => {
          if (err.response.status < 200 || err.response.status >= 300) {
            setUser(null);
          }
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
