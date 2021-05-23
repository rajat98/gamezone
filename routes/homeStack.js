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
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);