// context/auth-context.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showBookNow, setShowBookNow] = useState(false);

  return (
    <AuthContext.Provider value={{ loading, setLoading, showBookNow, setShowBookNow }}>
      {children}
    </AuthContext.Provider>
  );
};
