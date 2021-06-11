import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome';

const stackRoutes = createStackNavigator();

const AppRoute: React.FC = () => (
    <stackRoutes.Navigator 
        headerMode="none" 
        screenOptions={{ 
            cardStyle: { 
                
            }, 
        }}
    >
        <stackRoutes.Screen 
            name="Welcome" 
            component={Welcome} 
        />
    </stackRoutes.Navigator>
)

export default AppRoute;
