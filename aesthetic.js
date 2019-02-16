import React, { Component } from "react";
import styled from 'styled-components'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { Button } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
        <View style = {styles.container}>
            <Text> Let's talko 'bout it. </Text>
        </View>
        );
    }
}

const TalkoLogo = () => (
    <Image source = {{uri: "http://i67.tinypic.com/11kilwz.png"}}
    style = {{width: 200, height: 200}}
    />
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        }

)
export default TalkoLogo


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1;
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
    }
})
