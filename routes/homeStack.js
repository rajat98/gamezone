import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import ReviewDetails from '../screens/reviewdetail';
import Header from '../shared/header'
import Home from "../screens/home";
const screens = {
    //home screen will be default as it is on top
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => {
            return({
                headerTitle: () => <Header navigation={navigation} title={'GameZone'}/>
            })
        },
    },
    ReviewDetails:{
        screen: ReviewDetails,
    },
}
// use default navigation here instead of declaring for each screen
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 75}
    }
});

export default HomeStack;