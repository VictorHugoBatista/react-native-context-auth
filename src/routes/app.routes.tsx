import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const Router = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Router.Navigator>
        <Router.Screen name="Dashboard" component={Dashboard} />
    </Router.Navigator>
);

export default AuthRoutes;
