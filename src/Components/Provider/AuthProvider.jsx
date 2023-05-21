import React, { createContext } from 'react';

const AuthProvider = ({ children }) => {
    const AuthProvider = createContext()
    const allInfo = {

    }
    return (
        <AuthProvider.Provider value={allInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthProvider;