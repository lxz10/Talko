import React, { Component } from "react";
import styled from 'styled-components'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";
import { Button } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
        <View style = {styles.container}>
            <Text> Talko </Text>
        </View>
        );
    }
}
    

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gold",
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
