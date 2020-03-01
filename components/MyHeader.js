import React, { useState } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, TouchableHighlight } from 'react-native-elements';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  // Button,
  StyleSheet,
  Image,
  BackHandler,
  NativeAppEventEmitter,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Header, SearchBar} from 'react-native-elements';



class MyHeader extends React.Component{

    exitApp=()=>{

        fetch('http://<Insert your IP address>/ibm/exitApp.php');
        // alert('exit app??');
        BackHandler.exitApp();

    }
    render(){
  
        return (

            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                barStyle="light-content" // or directly
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'IBM Cloud Pak System', style: { color: '#fff'} }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.exitApp()}}
                containerStyle={{
                backgroundColor: '#14152b',
                justifyContent: 'space-around',
                }}
            />     

        );

    };
      
       
}

export default MyHeader ;
  
