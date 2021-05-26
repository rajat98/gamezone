import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {globalStyles, images} from "../styles/global";
import Card from "../shared/card";

export default function home({navigation}){
    const pressHandler = () => {
        //goBack to last screen implicitly pops
        navigation.goBack();
        //explicit pop function
        // navigation.pop();
    }
    const rating = navigation.getParam('rating');
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: {navigation.getParam('title')}</Text>
                <Text>Genre: {navigation.getParam('body')}</Text>
                <View style={styles.ratings}>
                    <Text>GameZone Rating: </Text>
                    <Image source={images.ratings[rating]}/>
                </View>

                {/*<Button title='back' onPress={pressHandler}/>*/}
            </Card>
        </View>
    )
}

const styles =StyleSheet.create({
    ratings:{
        flexDirection: 'row',
        // justifyContent: 'center',
        paddingTop: 3,
        marginTop: 3,
        borderTopColor: '#eee',
    }
})
