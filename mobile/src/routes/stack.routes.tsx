import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../pages/main/Welcome';
import {DatasPage} from '../pages/main/DatasPage';
import {Home} from '../pages/main/Home';
import {Control} from '../pages/control/Control';
import {Finance} from '../pages/finance/Finance';
import {Stock} from '../pages/stock/Stock';
import { AddItems } from '../pages/stock/AddItems';


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
            <stackRoutes.Screen 
                name="AddItems" 
                component={AddItems} 
            />
        </stackRoutes.Navigator>
    
)

export default AppRoute;
