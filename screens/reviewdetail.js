import React from 'react';
import { View, Text, Button} from 'react-native';
import {globalStyles} from "../styles/global";
import Card from "../shared/card";

export default function home({navigation}){
    const pressHandler = () => {
        //goBack to last screen implicitly pops
        navigation.goBack();
        //explicit pop function
        // navigation.pop();
    }
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: {navigation.getParam('title')}</Text>
                <Text>Rating: {navigation.getParam('rating')}</Text>
                <Text>Genre: {navigation.getParam('body')}</Text>
                {/*<Button title='back' onPress={pressHandler}/>*/}
            </Card>
        </View>
    )
}
