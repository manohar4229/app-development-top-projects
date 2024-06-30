import React from "react";

import {View,Text,StyleSheet,useColorScheme} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme()==='dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? [styles.whiteText, styles.text,styles.border]:[styles.darkText, styles.text,styles.border]}>
                Helloo World !
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
        
    },
    text:{
        fontSize:28,
    },
    border:{
        borderWidth:1,
        paddingHorizontal:10,
        borderColor:"black",
        borderRadius:10,
        backgroundColor:'orange'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})

export default AppPro;