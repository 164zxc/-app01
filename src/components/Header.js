import React from "react";
import { StyleSheet, Text, View,Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationActions } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

const Header = (props) => {
  return (
      <View style={styles.headerStyle}>
        
       
        <Text style={styles.textStyle}>Rebirth</Text>
        
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    backgroundColor: "#763BE54A",
    alignItems: "center",
    height: 80,
    paddingTop: 30,
    paddingLeft:8,
    paddingRight:8,
    
  },
  textStyle: {
    fontSize: 20,
    marginLeft:15,
    marginTop:10,
    color:"#ffffff",
    fontFamily:'Georgia'
    
  },
  Icon:{
    width:40,
    height:40
    
  }
});

export default Header;
