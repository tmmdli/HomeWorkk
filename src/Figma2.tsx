import React from "react";
import { Text,Image, View,StyleSheet, TouchableOpacity } from "react-native";

const App=()=>{
    return(
        <View>
            <Image  style ={styles.photo}
                    source={require('./Menu1.png')}/>
            <TouchableOpacity style={styles.lupabutton}>
            <Image  style ={styles.lupaphoto}
                    source={require('./lupa.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cantabutton}>
            <Image  style ={styles.cantaphoto}
                    source={require('./canta.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>
                DELICIOUS FOOD
            </Text>
            <Text style={styles.text1}>
                AT YOUR DOOR STEPS
            </Text>
            <TouchableOpacity style={styles.button}>
            <Image 
                style={styles.photo2}
                source={require('./button2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
            <Image 
                style={styles.photo3}
                source={require('./button3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
            <Image 
                style={styles.photo4}
                source={require('./button4.png')}/>
            <Image  
                style ={styles.photo5}
                source={require('./Burger.png')}/>
            <Image  
                style ={styles.photo6}
                source={require('./Burger2.png')}/>
            <Image  
                style ={styles.photo7}
                source={require('./Burger3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
            <Image  
                style ={styles.photo7}
                source={require('./button5.png')}/>
            </TouchableOpacity>
            <Image  
                style ={styles.photo8}
                source={require('./plov.png')}/>
            <Image  
                style ={styles.photo9}
                source={require('./duzbucaqli1.png')}/>
            <Text style={styles.text2}>
              $180.35
            </Text>
            <TouchableOpacity style={styles.button4}>
            <Image 
                style={styles.photo10}
                source={require('./button6.png')}/>
            </TouchableOpacity>
            <Image  
                style ={styles.photo11}
                source={require('./plov2.png')}/>
             <Image  
                style ={styles.photo12}
                source={require('./duzbucaqli1.png')}/>
             <Text style={styles.text3}>
             $50.50
            </Text>
            <Text style={styles.text4}>
            Popular
            </Text>
            <Text style={styles.text5}>
            Now
            </Text>
            <Image  
                style ={styles.photo13}
                source={require('./duzbucaqli3.png')}/>
            <Image  
                style ={styles.photo14}
                source={require('./plov3.png')}/>
            <Text style={styles.text6}>
            Chicken Manchurian
            </Text>
            <Text style={styles.text7}>
            Chinese Cuisine
            </Text>
            <Text style={styles.text8}>
            $110.50
            </Text>
            <TouchableOpacity style={styles.button5}>
            <Image 
                style={styles.photo15}
                source={require('./button7.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button6}>
            <Image 
                style={styles.photo16}
                source={require('./ox.png')}/>
            </TouchableOpacity>

    
        </View>
    )
}

const styles=StyleSheet.create({
    photo:{
        marginLeft:20,
        marginTop:20
    },
    cantabutton:{
        marginLeft:360,
        marginTop:-19
    },
    lupabutton:{
        marginLeft:320,
        marginTop:-18
    },



    text:{
        color:'black',
        marginLeft:20,
        marginTop:30,
        fontSize:40
    },
    text1:{
        color:'black',
        marginLeft:20,
        fontSize:28
    },
    button:{
        marginLeft:20,
        marginTop:60
    },
    button1:{
        marginLeft:110,
        marginTop:-68
    },
    button2:{
        marginLeft:215,
        marginTop:-85
    },
    photo5:{
        marginLeft:20,
        marginTop:-42
    },
    photo6:{
        marginLeft:20,
        marginTop:-10
    },
    photo7:{
        marginLeft:20,
        marginTop:-9
    },
    button3:{
        marginLeft:290,
        marginTop:-29
    },
    photo8:{
        marginLeft:30,
        marginTop:60,
        borderRadius:20
    },
    photo9:{
        marginLeft:35,
        marginTop:-48
    },
    text2:{
        marginLeft:65,
        marginTop:-30,
        color:'rgba(255, 255, 255, 1)',
        fontSize:18
    },
    button4:{
        marginLeft:170,
        marginTop:-27
    },
    photo11:{
       marginLeft:260,
       marginTop:-275,
       borderRadius:15
    },
    photo12:{
       marginLeft:280 ,
       marginTop:-47
    },
    text3:{
        marginLeft:315,
        marginTop:-30,
        color:'rgba(255, 255, 255, 1)',
        fontSize:18
    },
    text4:{
        marginLeft:30,
        marginTop:30,
        color:'black',
        fontSize:35
    },
    text5:{
        marginLeft:165,
        marginTop:-45,
        color:'black',
        fontSize:35
    },
      photo13:{
        marginLeft:30,
        marginTop:10
   },
    photo14:{
        marginLeft:35,
        marginTop:-80
    },
    text6:{
        marginLeft:120,
        marginTop:-70,
        color:'black',
        fontSize:22
    },
    text7:{
        marginLeft:125,
        color:'black'
    },
    text8:{
       marginLeft:125, 
    },
    button5:{
        marginLeft:290,
        marginTop:-35
    },
   button6:{
    marginLeft:305,
    marginTop:-28
  
   }
})
    export default App;

