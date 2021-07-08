import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();
const Context = ({ children }) => {
  const [userObject, setUserObject] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getuser", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);

  return <myContext.Provider value={userObject}>{children}</myContext.Provider>;
};

export default Context;
