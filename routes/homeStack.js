import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewdetail';
// import About from '../screens/about';
const screens = {
    //home screen will be default as it is on top
    Home:{
        screen: Home,
    },
    ReviewDetails:{
        screen: ReviewDetails,
    },
}
// use default navigation here instead of declaring for each screen
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60,}
    }
});

export default createAppContainer(HomeStack);