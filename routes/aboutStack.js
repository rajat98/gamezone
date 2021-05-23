import {createStackNavigator} from "react-navigation-stack";
import About from '../screens/about';
const screens = {
    About:{
        screen: About,
    },
}
// use default navigation here instead of declaring for each screen
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60,}
    }
});

export default AboutStack;