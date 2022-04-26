import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext(null);

function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(`Can't use "useUser" without an UserProvider!`);
    }
    return context;
}

function UserProvider({children}) {
    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        const lasLoginState = localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null;

        setLoginData(lasLoginState);
    }, []);
    
    const login = async (googleData) => {
        const res = await fetch('/api/google-login', {
          method: 'POST', 
          body: JSON.stringify({
            token: googleData.tokenId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
  };

  const logout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  }


    return (
        <UserContext.Provider value={{loginData, login, logout}} >{children}</UserContext.Provider>
    )
}

export { useUser};
export default UserProvider;