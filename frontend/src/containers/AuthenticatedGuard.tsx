/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { fakeAuthProvider } from '../services/auth';
import { useLocation, Navigate } from 'react-router-dom';

interface AuthContextType {
  user: any;
  signin: (user: string, pass: string, callback: VoidFunction) => Promise<any>;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (
    userName: string,
    passWord: string,
    callback: VoidFunction
  ) => {
    return fakeAuthProvider
      .signin(userName, passWord)
      .then((user) => {
        setUser(user);
        callback();
      })
      .catch((err) => {
        return err;
      });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
