import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome';
import {DatasPage} from '../pages/DatasPage';
import {Home} from '../pages/Home';

const stackRoutes = createStackNavigator();

import colors from '../styles/colors';

const AppRoute: React.FC = () => (
    <stackRoutes.Navigator 
        headerMode="none" 
        screenOptions={{ 
            cardStyle: { 
                backgroundColor:colors.background
            }, 
        }}
    >
        <stackRoutes.Screen 
            name="Welcome" 
            component={Welcome} 
        />
        <stackRoutes.Screen 
            name="DatasPage" 
            component={DatasPage} 
        />
        <stackRoutes.Screen 
            name="Home" 
            component={Home} 
        />
    </stackRoutes.Navigator>
)

export default AppRoute;
