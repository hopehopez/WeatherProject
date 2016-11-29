import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

var Forecast = React.createClass({
   render() {
       return (
         <View style={{flex:3}}>
             <Text style={styles.bigText1}>
                 {this.props.main}
             </Text>
             <Text style={styles.mainText1}>
                 Current conditons:{this.props.description}
             </Text>
             <Text style={styles.bigText1}>
                 {this.props.temp}°F
             </Text>
         </View>
       );

   }
});

var styles = StyleSheet.create({
    bigText1:{
        flex:2,
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:'#ffffff'

    },
    mainText1:{
        flex:1,
        fontSize:16,
        textAlign:'center',
        color:'#ffffff'
    }

})

module.exports = Forecast;