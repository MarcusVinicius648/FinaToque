import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';
import { ControlContextProvider } from '../contexts/controlContext';

const Routes = () => (
<ControlContextProvider>
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
</ControlContextProvider>
   

)

export default Routes;