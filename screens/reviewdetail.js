import React from 'react';
import { View, Text, Button} from 'react-native';
import {globalStyles} from "../styles/global";

export default function home({navigation}){
    const pressHandler = () => {
        //goBack to last screen implicitly pops
        navigation.goBack();
        //explicit pop function
        // navigation.pop();
    }
    return(
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back' onPress={pressHandler}/>
        </View>
    )
}
