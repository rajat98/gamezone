import {createAppContainer} from "react-navigation";
//use --force or --legacy-peer-deps if npm install gives error
import {createDrawerNavigator} from "react-navigation-drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack
    },
    About:{
        screen: AboutStack
    }
})

export default createAppContainer(RootDrawNavigator);