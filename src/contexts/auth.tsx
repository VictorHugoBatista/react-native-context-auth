import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';

interface User {
    name: string,
    email: string,
}

interface AuthContextData {
    signed: boolean,
    user: User | null,
    loading: boolean,
    signIn(): Promise<void>,
    signOut(): void,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storagedUser && storagedToken) {
                // AppRegistry.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
                console.log('teste setUser(JSON.parse(storagedUser));');
            }
            setLoading(false);
        })();
    }, []);

    const signIn = async () => {
        const response = await auth.signIn();
        setUser(response.user);
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);

        // AppRegistry.defaults.headers['Authorization'] = `Bearer ${response.user}`;
    };

    const signOut = async () => {
        await AsyncStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{signed: !! user, user, loading, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextData => useContext(AuthContext);
