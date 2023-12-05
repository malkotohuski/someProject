import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './screens/DrawerContent/tabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './screens/DrawerContent/drawerContent';



const Drawer = createDrawerNavigator();

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Navigator isLoggedIn={isLoggedIn} />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;
