import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    BackHandler,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    ImageBackground,
    Alert,
} from 'react-native';
// import { Button } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
import {NavigationActions} from 'react-navigation';


class Login extends Component {

constructor() {
 
  super() ;
  
    this.state = {
 
      username:'',
      password:'',
      hostname:'',
    }
 
}

onLoginPress=()=>{

      fetch('http://<Insert your IP address>/ibm/login.php',  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
  
          username: this.state.username,
      
          password: this.state.password,
      
          hostname: this.state.hostname
      
        })
      
      }).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Screen1');
        }
        else
        {
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });

    }


    render() {
        
        return (
          <>
           

                      <View>
                      <Image 
                      source={require('./assets/images/login_icon.png')} 
                      style ={{alignSelf:'center',height:100,width:250,marginLeft:600, marginTop:100, marginRight:600 }}/>
                      <Text 
                        style={{fontSize: 27, paddingBottom: 40, textAlign: 'center', marginTop: 50,}}>
                        Login page
                      </Text>
          
                      <TextInput 
                      placeholder='Username' 
                      style={styles.input}
                      value={this.state.username}
                      onChangeText={(username) => this.setState({username})}
                      />

                      <TextInput 
                      placeholder='Password' 
                      style={styles.input}
                      value={this.state.password}
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                      />

                      <TextInput 
                      placeholder='Hostname' 
                      style={styles.input}
                      value={this.state.hostname}
                      onChangeText={(hostname) => this.setState({hostname})}
                      />

                      <View style={{margin:7}} />

                      <View style={{paddingTop:50, height : 100, width: 200, alignSelf: 'center'}}>

                      <Button 
                            
                            // onPress={()=>  this.props.navigation.navigate('Screen1')}
                            onPress ={this.onLoginPress}
                            title="Submit"
                            disabled={(this.state.username == '' || this.state.password == '' || this.state.hostname == '') ? true : false}

                            style={styles.button_style}
                            
                          />
                          </View>

                      </View>
                    

              
                  </>
            )
    }

}

const styles = StyleSheet.create({
    input: {
    borderWidth :1,
    borderColor :'black', 
    padding: 10,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    },

    button_style: {

       marginLeft:  50,
       width : 200,
       height: 44, 
       marginBottom: 200,
       paddingBottom: 100
    },
    
  });
console.disableYellowBox = true;
export default withNavigation(Login);



