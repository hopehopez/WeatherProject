import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image
} from 'react-native';
var Forecast = require('./Forecast');
var WeatherProject = React.createClass({

    getInitialState(){
        return {
            zip: '',
            forecast: {
                main: 'Clouds',
                description: 'few Clouds',
                temp: 45.7
            }
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('image!flowers')}
                       resizeMode='cover'
                       style={styles.backdrop}>

                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput
                                    style={[styles.mainText, styles.code]}
                                    returnKeyType='go'
                                    onSubmitEditing={this._handleTextChange}
                                />
                            </View>

                        </View>

                        <Forecast
                            main={this.state.forecast.main}
                            description={this.state.forecast.description}
                            temp={this.state.forecast.temp}

                        />
                    </View>
                    <View style={{flex: 2}}></View>
                </Image>
            </View>
        );
    },
    _handleTextChange(event){
        console.log(event.nativeEvent.text);
        this.setState({
            zip: event.nativeEvent.text
        });
    }
});

var baseFontSize = 16;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        width:375,
        height:667
    },
    overlay: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30,
        backgroundColor: 'red'
    },
    zipContainer: {
        flex: 1,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        backgroundColor: 'green'

    },

    zipCode: {
        width: 50,
        height: baseFontSize,
    },
    mainText: {
        flex: 1,
        fontSize: baseFontSize,
        backgroundColor: 'blue',
        color:'#f5f5f5',
        padding:10,
        textAlign:'center'
    },

});

//导出控件
module.exports = WeatherProject;