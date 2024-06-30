import { StyleSheet, Text, View ,Linking,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)    
    }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in javascript 21-ES12
            </Text>
        </View>
        <Image 
        source={{
            uri:"data:image/jpeg;base64,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"
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={{fontSize:15,fontWeight:"500"}}>
                Just like the previous versions of javascript,
                ES12 has also brought some new features and improvements.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://github.com/manohar4229')}>
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize :24,
        fontWeight:'bold',
        paddingHorizontal:14,
        paddingVertical:10,
        color:'black'
    },
    card:{
        height:490,
        width:400,
        padding:10,
        borderRadius:10,
        marginHorizontal:10,
        marginBottom:20,
        flex:1,
    },
    elevatedCard:{
        backgroundColor:"#E07C40",
        elevation:10,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    headingContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:10,
    },
    cardImage:{
        height:300,
        width:380,
        borderRadius:10,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    socialLink:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'#FFFFFF',
        padding:10,
        paddingHorizontal:15,
        borderRadius:10,
    }
})