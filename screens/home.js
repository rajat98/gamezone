import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from "../styles/global";

export default function Home({navigation} ){
    //When we configure Navigator every screen gets navigation property assigned as props
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        //will do same thing more explicit though
        // navigation.push('ReviewDetails');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Review Details' onPress={pressHandler}></Button>
        </View>
    )
}
