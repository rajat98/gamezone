import React, {useState} from 'react';
import {Button, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from "../styles/global";
import Card from'../shared/card';

export default function Home({navigation} ){
    //When we configure Navigator every screen gets navigation property assigned as props
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
        //will do same thing more explicit though
        // navigation.push('ReviewDetails');
    }
    const [reviews, setReviews] = useState([
        {title: 'Attack on titan', rating: 9, body: 'Action, Gore', key: 1},
        {title: 'JuJutsu Kaizen', rating: 9, body: 'Action, Gore, Humor', key: 2},
        {title: 'One Punch man', rating: 9, body: 'Action, Gore, Humor', key: 3},
        {title: 'Naruto', rating: 9, body: 'Action, Humor', key: 4},
    ]);
    return(
        <View style={globalStyles.container}>
            {/*<Button title='Review Details' onPress={pressHandler}></Button>*/}
            <FlatList data={reviews} renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>

            )}/>
        </View>
    )
}
