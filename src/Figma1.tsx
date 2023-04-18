import React from "react";
import { Text,Image, View,StyleSheet, TouchableOpacity } from "react-native";

const App=()=>{
    return(
        <View>
            <Text style={styles.text}>
            ENJOY FRIED RICE-
            THE BEST MEAL
            </Text>

            <TouchableOpacity style={styles.photobutton}>
            <Image  style ={styles.photo}
                    source={require('./buton.png')}/>
            </TouchableOpacity>
             <Image  style={styles.newphoto} 
            source ={require('./2plov.png')} />
        
            </View>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:47,
        lineHeight:50,
        width:337,
        height:200,
        top:110,
        left:18,
        color:'black'
    },
    photobutton:{
        marginTop:90,
        marginLeft:300
    
    },
    newphoto:{
        marginTop:-120,
        marginLeft:5
    }
}

)
export default App;


