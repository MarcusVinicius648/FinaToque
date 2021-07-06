import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../pages/Welcome';
import {DatasPage} from '../pages/DatasPage';
import {Home} from '../pages/Home';
import {Control} from '../pages/Control';
import {Finance} from '../pages/Finance';
import {Stock} from '../pages/Stock';

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
        <stackRoutes.Screen 
            name="Control" 
            component={Control} 
        />
        <stackRoutes.Screen 
            name="Finance" 
            component={Finance} 
        />
        <stackRoutes.Screen 
            name="Stock" 
            component={Stock} 
        />
    </stackRoutes.Navigator>
)

export default AppRoute;
