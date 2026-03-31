import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        if (!token) {
            setUser(null);
            return;
        }
        try {
            const decoded = jwtDecode(token);
            // Validar si el token ha expirado
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                setUser(null);
            } else {
                setUser({ 
                    email: localStorage.getItem('userEmail'), 
                    id: localStorage.getItem('userId') 
                });
            }
        } catch (error) {
            setUser(null);
        }
    }, [token, role]);

    const login = (newToken, userData, newRole) => {
        setToken(newToken);
        setRole(newRole);
        setUser(userData);
        localStorage.setItem('token', newToken);
        localStorage.setItem('role', newRole);
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('userEmail', userData.email);
    };

    const logout = () => {
        setToken(null);
        setRole(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
    };

    const isAdmin = () => role && (String(role).toUpperCase() === 'ROLE_ADMIN' || String(role).toUpperCase() === 'ADMIN');
    const isProfesor = () => role && (String(role).toUpperCase() === 'ROLE_PROFESOR' || String(role).toUpperCase() === 'PROFESOR');

    return (
        <AuthContext.Provider value={{ user, token, role, login, logout, isAdmin, isProfesor }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
