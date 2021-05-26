import React from "react";
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function Header({navigation, title}){
    const onPressHandler = () => {
        navigation.openDrawer();
    };
    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} style={styles.icon} onPress={onPressHandler}/>
            <View style={styles.imageComp}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        marginLeft: -15,
        marginTop: -6,
        width: '120%',
        height: '136%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position: 'absolute',
        left: 16,
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal: 10,
    },
    imageComp:{
        flexDirection: 'row',
    }
})
