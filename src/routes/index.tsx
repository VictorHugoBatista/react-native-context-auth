import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#666"></ActivityIndicator>
            </View>
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
