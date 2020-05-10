import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {AntDesign, Ionicons} from '@expo/vector-icons'

import PayButton from './components/PayButton'

import HomeScreen from './pages/Home'
import WalletScreen from './pages/Wallet'
import PayScreen from './pages/Pay'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route, navigation}) => ({
                    tabBarIcon: ({color, size, focused}) => {
                        if(route.name === 'Pay'){
                            return(
                                <PayButton 
                                    onPress={() => navigation.navigate('Pay')}
                                    focused={focused}
                                />
                            )
                        }
                        const {lib: Icon, name} = icons[route.name]
                        return <Icon name={name} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    style: {
                        backgroundColor: '#131418',
                        borderTopColor: '#ffffff'
                    },
                    activeTintColor: '#fff',
                    inactiveTintColor: '#92929c'
                }}
                
            >
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen} 
                    options={{
                        title: 'Incio'
                    }}
                />

                <Tab.Screen 
                    name='Wallet' 
                    component={WalletScreen} 
                    options={{
                        title: 'Carteira'
                    }}
                />

                <Tab.Screen 
                    name='Pay' 
                    component={PayScreen}
                    options={{
                        title: ''
                    }} 
                />

                <Tab.Screen 
                    name='Notifications' 
                    component={PayScreen}
                    options={{
                        title: 'Notificações'
                    }} 
                />
                
                <Tab.Screen 
                    name='Settings' 
                    component={PayScreen}
                    options={{
                        title: 'Ajustes'
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}