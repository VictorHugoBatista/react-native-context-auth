import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const Router = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Router.Navigator>
        <Router.Screen name="SignIn" component={SignIn} />
    </Router.Navigator>
);

export default AuthRoutes;
