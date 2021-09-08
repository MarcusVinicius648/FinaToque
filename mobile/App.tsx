import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';

import{useFonts,
  Poppins_500Medium,
  Poppins_200ExtraLight,
  Poppins_100Thin } from '@expo-google-fonts/poppins';

export default function App(){
  const[fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_200ExtraLight,
    Poppins_100Thin
  });

  if(!fontsLoaded)
  return<AppLoading/>

  return (
    <Routes/>
  )
}
