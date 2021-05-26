import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import Header from '../shared/header';
import About from '../screens/about'
const screens = {
    About:{
        screen: About,
        navigationOptions:({navigation})=>{
            return({
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
            })
        }
    },
}
// use default navigation here instead of declaring for each screen
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 75},
    }
});

export default AboutStack;